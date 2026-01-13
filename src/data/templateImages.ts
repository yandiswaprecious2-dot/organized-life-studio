// Import available template preview images
import monthlyBudgetPlannerEssential from "@/assets/templates/monthly-budget-planner-essential.png";
import monthlyBudgetPlannerMinimal from "@/assets/templates/monthly-budget-planner-minimal.png";
import monthlyBudgetPlannerNeutral from "@/assets/templates/monthly-budget-planner-neutral.png";
import expenseTrackerClassic from "@/assets/templates/expense-tracker-classic.png";

// Map of template slugs/names to their preview images
export const templateImages: Record<string, string> = {
  "monthly-budget-planner-essential": monthlyBudgetPlannerEssential,
  "monthly-budget-planner-minimal": monthlyBudgetPlannerMinimal,
  "monthly-budget-planner-neutral": monthlyBudgetPlannerNeutral,
  "expense-tracker-classic": expenseTrackerClassic,
};

// Templates that have PayPal links ready (can be purchased directly)
export const purchasableTemplates: Record<string, string> = {
  "monthly-budget-planner-essential": "https://www.paypal.com/ncp/payment/XZS6CYT7J93NG",
  "monthly-budget-planner-minimal": "https://www.paypal.com/ncp/payment/VEA6H9SGH6T8U",
  "monthly-budget-planner-neutral": "https://www.paypal.com/ncp/payment/G5P6YJS2WZETL",
  "expense-tracker-classic": "https://www.paypal.com/ncp/payment/3MJV8AFMAXDFW",
};

// Helper to check if a template is purchasable
export const isTemplatePurchasable = (slug?: string): boolean => {
  return !!slug && slug in purchasableTemplates;
};

// Helper to get template image
export const getTemplateImage = (slug?: string): string | undefined => {
  return slug ? templateImages[slug] : undefined;
};
