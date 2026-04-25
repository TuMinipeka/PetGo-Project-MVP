import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://abseilawpmdkxiocioft.supabase.co/rest/v1/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFic2VpbGF3cG1ka3hpb2Npb2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDQ3MzMsImV4cCI6MjA5MTkyMDczM30.IfrTKc8UWKdoG0mxXKxsGD5g1WFw0yYBlZn3S7x99qw'

export const supabase = createClient(supabaseUrl, supabaseKey)