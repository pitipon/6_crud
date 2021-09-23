import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    age: {
      type: Number,
      min: 18,
      max: 65
    },
    job: {
      type: Boolean,
      default: false
    },
    sex: {
      type: String,
      enum: ['male','female']
    },
    role: {
      type: [String],
      default: ["member"],
      enum: ['member', 'admin']
    },
    soul: {
      hp: {
        type: Number,
        min:1000,
        max:5000
      },
      atk: {
        type: Number,
        min:100,
        max:1000
      },
      def: {
        type: Number,
        min:100,
        max:1000
      },
      class: {
        type: String,
        default: 'human',
        enum: ['human','knight','mage','robot','vampire']
      }
    },
    monsters: [{
      name: {
        type: String
      },
      hp: {
        type: Number,
        min:1000,
        max:5000
      },
      atk: {
        type: Number,
        min:100,
        max:1000
      },
      def: {
        type: Number,
        min:100,
        max:1000
      },
    }]
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
