const mongoose = require("mongoose");

const workEntrySchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance", "Temporary", "Volunteer"],
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startDate: {
    type: String, // storing as "YYYY-MM" format from month input
    required: true,
  },
  endDate: {
    type: String, // storing as "YYYY-MM" format from month input
  },
  location: {
    type: String,
    required: true,
  },
  currently: {
    type: Boolean,
    default: false,
  },
}, { _id: true });

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // One profile per user
    },
    
    // Step 1: Language
    language: {
      type: String,
      required: [true, "Language selection is required"],
      enum: [
        "English", "Hindi", "Spanish", "French", "German", "Chinese",
        "Japanese", "Korean", "Italian", "Portuguese", "Russian", 
        "Arabic", "Dutch", "Turkish", "Bengali", "Urdu", "Tamil", 
        "Telugu", "Marathi", "Gujarati", "Punjabi"
      ],
    },
    
    // Step 2: Personal Information
    personalInfo: {
      firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
      },
      dob: {
        type: Date,
        required: [true, "Date of birth is required"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        trim: true,
      },
      phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
      },
    },
    
    // Step 3: Location Information
    locationInfo: {
      currentCity: {
        type: String,
        required: [true, "Current city is required"],
      },
      preferredCities: [{
        type: String,
        // validate: {
        //  validator: function(cities) {
        //    return cities.length <= 3;
        //  },
        //  message: "Maximum 3 preferred cities allowed"
        //}
      }],
    },
    
    // Step 4: Current Status Information
    statusInfo: {
      currentStatus: {
        type: String,
        required: [true, "Current status is required"],
        enum: [
          "College Student",
          "Fresher", 
          "Working Professional",
          "School Student",
          "Women Returning to Work"
        ],
      },
      // Education details (for College Student, Fresher, Working Professional)
      degree: {
        type: String,
        required: function() {
          return ["College Student", "Fresher", "Working Professional"].includes(this.statusInfo.currentStatus);
        },
      },
      specialization: {
        type: String,
        required: function() {
          return ["College Student", "Fresher", "Working Professional"].includes(this.statusInfo.currentStatus);
        },
      },
      collegeName: {
        type: String,
        required: function() {
          return ["College Student", "Fresher", "Working Professional"].includes(this.statusInfo.currentStatus);
        },
      },
      yearOfCompletion: {
        type: Number,
        required: function() {
          return ["College Student", "Fresher", "Working Professional"].includes(this.statusInfo.currentStatus);
        },
        min: 1960,
        max: 2030,
      },
      // Experience (for Working Professional, Women Returning to Work)
      yearsOfExperience: {
        type: String,
        required: function() {
          return ["Working Professional", "Women Returning to Work"].includes(this.statusInfo.currentStatus);
        },
        enum: [
          "Less than 1 year",
          "1-3 years", 
          "3-5 years",
          "5-10 years",
          "10+ years"
        ],
      },
    },
    
    // Step 5: Work History (Optional)
    workEntries: [workEntrySchema],
    
    // Profile completion status
    isComplete: {
      type: Boolean,
      default: true,
    },
    
    // Profile visibility
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
profileSchema.index({ userId: 1 });
profileSchema.index({ "personalInfo.email": 1 });
profileSchema.index({ "locationInfo.currentCity": 1 });
profileSchema.index({ "statusInfo.currentStatus": 1 });

// Virtual for full name
profileSchema.virtual('fullName').get(function() {
  return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

// Method to get profile summary
profileSchema.methods.getProfileSummary = function() {
  return {
    name: this.fullName,
    email: this.personalInfo.email,
    currentCity: this.locationInfo.currentCity,
    status: this.statusInfo.currentStatus,
    experience: this.statusInfo.yearsOfExperience || 'Fresher',
    workExperience: this.workEntries.length,
  };
};

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;