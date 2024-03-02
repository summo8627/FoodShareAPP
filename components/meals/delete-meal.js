'use server';
import { deleteMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function handleDeleteMeal(slug){
    deleteMeal(slug);

    revalidatePath('/meals');
    redirect('/meals');
} 