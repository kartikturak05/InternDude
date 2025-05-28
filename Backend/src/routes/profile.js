const express = require("express");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
const User = require("../models/User");
const router = express.Router();

// Middleware to verify JWT token and extract user ID
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access token is required",
      });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid token - user not found",
      });
    }

    req.user = {
      id: decoded.id,
      email: user.email,
      name: user.name,
      role: user.role
    };
    
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Token verification failed",
        error: error.message,
      });
    }
  }
};

// @route   POST /api/profile/create
// @desc    Create or update user profile
// @access  Private
router.post("/create", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      language,
      personalInfo,
      locationInfo,
      statusInfo,
      workEntries
    } = req.body;

    // Validate required fields
    if (!language) {
      return res.status(400).json({
        success: false,
        message: "Language selection is required",
      });
    }

    if (!personalInfo || !personalInfo.firstName || !personalInfo.lastName || 
        !personalInfo.dob || !personalInfo.email || !personalInfo.phone) {
      return res.status(400).json({
        success: false,
        message: "All personal information fields are required",
      });
    }

    if (!locationInfo || !locationInfo.currentCity) {
      return res.status(400).json({
        success: false,
        message: "Current city is required",
      });
    }

    if (!statusInfo || !statusInfo.currentStatus) {
      return res.status(400).json({
        success: false,
        message: "Current status is required",
      });
    }

    // Validate conditional fields based on current status
    const educationRequiredStatuses = ["College Student", "Fresher", "Working Professional"];
    const experienceRequiredStatuses = ["Working Professional", "Women Returning to Work"];

    if (educationRequiredStatuses.includes(statusInfo.currentStatus)) {
      if (!statusInfo.degree || !statusInfo.specialization || 
          !statusInfo.collegeName || !statusInfo.yearOfCompletion) {
        return res.status(400).json({
          success: false,
          message: "Education details are required for your current status",
        });
      }
    }

    if (experienceRequiredStatuses.includes(statusInfo.currentStatus)) {
      if (!statusInfo.yearsOfExperience) {
        return res.status(400).json({
          success: false,
          message: "Years of experience is required for your current status",
        });
      }
    }

    // Validate preferred cities limit
    if (locationInfo.preferredCities && locationInfo.preferredCities.length > 3) {
      return res.status(400).json({
        success: false,
        message: "Maximum 3 preferred cities are allowed",
      });
    }

    // Validate work entries if provided
    if (workEntries && workEntries.length > 0) {
      for (let entry of workEntries) {
        if (!entry.jobTitle || !entry.company || !entry.startDate || !entry.location) {
          return res.status(400).json({
            success: false,
            message: "All work entry fields (except end date) are required",
          });
        }
      }
    }

    // Check if profile already exists for this user
    let existingProfile = await Profile.findOne({ userId });

    if (existingProfile) {
      // Update existing profile
      existingProfile.language = language;
      existingProfile.personalInfo = personalInfo;
      existingProfile.locationInfo = locationInfo;
      existingProfile.statusInfo = statusInfo;
      existingProfile.workEntries = workEntries || [];
      existingProfile.isComplete = true;

      const updatedProfile = await existingProfile.save();

      return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: {
          profileId: updatedProfile._id,
          userId: updatedProfile.userId,
          summary: updatedProfile.getProfileSummary(),
        },
      });
    } else {
      // Create new profile
      const newProfile = new Profile({
        userId,
        language,
        personalInfo,
        locationInfo,
        statusInfo,
        workEntries: workEntries || [],
        isComplete: true,
      });

      const savedProfile = await newProfile.save();

      return res.status(201).json({
        success: true,
        message: "Profile created successfully",
        data: {
          profileId: savedProfile._id,
          userId: savedProfile.userId,
          summary: savedProfile.getProfileSummary(),
        },
      });
    }
  } catch (error) {
    console.error("Profile creation error:", error);
    
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// @route   GET /api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const profile = await Profile.findOne({ userId }).populate('userId', 'name email role');
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: profile,
    });
  } catch (error) {
    console.error("Get profile error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// @route   GET /api/profile/:userId
// @desc    Get user profile by user ID (for viewing other profiles)
// @access  Private
router.get("/:userId", authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;
    
    const profile = await Profile.findOne({ 
      userId, 
      isActive: true 
    }).populate('userId', 'name email role');
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: profile,
    });
  } catch (error) {
    console.error("Get profile by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// @route   PUT /api/profile/update
// @desc    Update user profile
// @access  Private
router.put("/update", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const updateData = req.body;

    const profile = await Profile.findOne({ userId });
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    // Update profile fields
    Object.keys(updateData).forEach(key => {
      if (updateData[key] !== undefined) {
        profile[key] = updateData[key];
      }
    });

    const updatedProfile = await profile.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        profileId: updatedProfile._id,
        summary: updatedProfile.getProfileSummary(),
      },
    });
  } catch (error) {
    console.error("Profile update error:", error);
    
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// @route   DELETE /api/profile/delete
// @desc    Delete user profile (soft delete)
// @access  Private
router.delete("/delete", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const profile = await Profile.findOne({ userId });
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    // Soft delete - set isActive to false
    profile.isActive = false;
    await profile.save();

    return res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } catch (error) {
    console.error("Profile deletion error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// @route   GET /api/profile/search
// @desc    Search profiles based on criteria
// @access  Private
router.get("/search", authenticateToken, async (req, res) => {
  try {
    const {
      currentCity,
      status,
      experience,
      language,
      page = 1,
      limit = 10
    } = req.query;

    let searchQuery = { isActive: true };

    // Build search criteria
    if (currentCity) {
      searchQuery["locationInfo.currentCity"] = new RegExp(currentCity, "i");
    }
    
    if (status) {
      searchQuery["statusInfo.currentStatus"] = status;
    }
    
    if (experience) {
      searchQuery["statusInfo.yearsOfExperience"] = experience;
    }
    
    if (language) {
      searchQuery.language = language;
    }

    const skip = (page - 1) * limit;
    
    const profiles = await Profile.find(searchQuery)
      .populate('userId', 'name email')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Profile.countDocuments(searchQuery);

    return res.status(200).json({
      success: true,
      message: "Profiles retrieved successfully",
      data: {
        profiles,
        pagination: {
          current: parseInt(page),
          total: Math.ceil(total / limit),
          count: profiles.length,
          totalProfiles: total,
        },
      },
    });
  } catch (error) {
    console.error("Profile search error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;