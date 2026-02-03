import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

const hasCredentials = !!(supabaseUrl && supabaseAnonKey);

if (!hasCredentials) {
  console.warn(
    "⚠️ Supabase credentials not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file to enable database features.",
  );
}

// Create client safely - will work if credentials are provided, otherwise gracefully degrade
export const supabase = hasCredentials
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type Inquiry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  message?: string;
  created_at?: string;
};

export type Enrollment = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  status?: string;
  enrollment_date?: string;
  created_at?: string;
};

// Submit inquiry
export const submitInquiry = async (inquiry: Inquiry) => {
  console.log("📝 Submitting inquiry...", inquiry);
  console.log("✅ Supabase configured:", !!supabase);
  console.log("🔑 Supabase URL:", supabaseUrl ? "Set" : "NOT SET");
  console.log("🔑 Supabase Key:", supabaseAnonKey ? "Set" : "NOT SET");

  if (!supabase) {
    const error = new Error(
      "❌ Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.",
    );
    console.error(error);
    return { success: false, error };
  }

  try {
    const { data, error } = await supabase
      .from("inquiries")
      .insert([inquiry])
      .select();

    if (error) {
      console.error("❌ Supabase Insert Error:", error);
      throw error;
    }

    console.log("✅ Inquiry submitted successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Error submitting inquiry:", error);
    return { success: false, error };
  }
};

// Submit enrollment
export const submitEnrollment = async (enrollment: Enrollment) => {
  if (!supabase) {
    console.warn("Supabase not configured");
    return { success: false, error: new Error("Supabase not configured") };
  }

  try {
    const { data, error } = await supabase
      .from("enrollments")
      .insert([enrollment])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Error submitting enrollment:", error);
    return { success: false, error };
  }
};

// Get all inquiries (admin)
export const getInquiries = async () => {
  if (!supabase) {
    console.warn("Supabase not configured");
    return { success: false, error: new Error("Supabase not configured") };
  }

  try {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return { success: false, error };
  }
};

// Get all enrollments (admin)
export const getEnrollments = async () => {
  if (!supabase) {
    console.warn("Supabase not configured");
    return { success: false, error: new Error("Supabase not configured") };
  }

  try {
    const { data, error } = await supabase
      .from("enrollments")
      .select("*")
      .order("enrollment_date", { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return { success: false, error };
  }
};
