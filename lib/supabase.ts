import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://koadvrsuigtxrevvrknc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvYWR2cnN1aWd0eHJldnZya25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDAzNzUsImV4cCI6MjA0ODAxNjM3NX0.sOMCZTUUXYfKYybbkenu1mBGnTXDmEl458dBnkuVu50";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);