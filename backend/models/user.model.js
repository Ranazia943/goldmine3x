import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of referral IDs
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who referred
    referralCode: { type: String, unique: true },
    image: { type: String, default: null }, // Image field, default is null (empty)
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;