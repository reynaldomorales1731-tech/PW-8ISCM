import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  supabase = createClient(
    'https://nufhnufknanoiqodsdtd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51ZmhudWZrbmFub2lxb2RzZHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMTYxMDgsImV4cCI6MjA5NTg5MjEwOH0.Spjy8lyaJayzld-uMk8Xt2nl9ulLQGH5JTpxe22hVEc'
  );

  getClient() {
    return this.supabase;
  }
}