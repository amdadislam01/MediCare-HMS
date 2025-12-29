// Simple user storage - in production, replace with database
// For demo purposes, we'll use a simple array
// Default test users:
// - admin@medicare.com / admin123
// - doctor@medicare.com / doctor123
// - patient@medicare.com / patient123

import bcrypt from "bcryptjs";

// In-memory user storage (replace with database in production)
// Passwords are pre-hashed using bcrypt
const users = [
  {
    id: "1",
    email: "admin@medicare.com",
    password: "$2b$10$ulU6eVvZ9Gc22dQyhFx1aeW6iCIandP7VttV1jT1hJUEbjvfvEOcm", // admin123
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "doctor@medicare.com",
    password: "$2b$10$t13a5ZK57c1hzxIJtC8vrujCC/CfFoocJxflnukGFTtfzVn.Bw3n2", // doctor123
    name: "Dr. Smith",
    role: "doctor",
  },
  {
    id: "3",
    email: "patient@medicare.com",
    password: "$2b$10$/rnGYLgE4UawfLcVHP3x5ugU4H/9xI52y8qG4rP3tYBnevIqIDiOa", // patient123
    name: "John Patient",
    role: "patient",
  },
];

// Find user by email
export async function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}

// Verify password
export async function verifyPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

// Get user by credentials
export async function getUserByCredentials(email, password) {
  const user = await getUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return null;
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

