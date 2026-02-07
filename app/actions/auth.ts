"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(prevState: any, formData: FormData) {
    const supabase = await createClient();
    const origin = (await headers()).get("origin");

    const email = formData.get("email") as string;
    const password = formData.get("password") as string; // Optional password or set default/random
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const companyName = formData.get("companyName") as string;
    const role = formData.get("role") as string;
    const category = formData.get("category") as string;
    const businessScale = formData.get("businessScale") as string;
    const gstNumber = formData.get("gstNumber") as string;

    // 1. Sign up the user
    const { error, data } = await supabase.auth.signUp({
        email,
        password: password || "TempPassword123!",
        options: {
            data: {
                first_name: firstName, // We will refine this below
                company_name: companyName,
                role: role,
                category: category,
                business_scale: businessScale,
                gst_number: gstNumber,
            },
        },
    });

    if (error) {
        console.error("Signup Error:", error);
        return { error: error.message };
    }

    if (data.user) {
        // RESILIENT FIX: Manually ensure profile exists.
        // This handles cases where the user existed in Auth (so no Trigger fired)
        // but was missing from public.profiles (due to our DB resets).

        // Split name best effort
        const nameParts = firstName.trim().split(" ");
        const realFirstName = nameParts[0];
        const realLastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
                id: data.user.id,
                email: email,
                first_name: realFirstName,
                last_name: realLastName,
                company_name: companyName,
                role: role,
                category: category,
                business_scale: businessScale,
                gst_number: gstNumber,
                // We preserve created_at if it exists, roughly
            }, { onConflict: 'id' });

        if (profileError) {
            console.error("Profile Upsert Error:", profileError);
            // Don't fail the whole flow, but log it.
        }
    }

    return { success: true, message: "Account created successfully" };
}
