
"use server";

import { createClient } from "@/lib/supabase/server";

export async function getClients() {
  await createClient();

  // La consulta se agregará cuando el equipo
  // defina el esquema SQL de Supabase.
  return { success: true, data: [] };
}