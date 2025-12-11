'use server';

// This acts as a mock for retrieving content from Supabase
// In a real app, we would Query the database here.

export async function getEducationalContent() {
    return {
        title: "Linear Explorer",
        subtitle: "Visualize how the slope (m) and y-intercept (c) affect a linear function.",
        tag: "Interactive Math Demo"
    };
}
