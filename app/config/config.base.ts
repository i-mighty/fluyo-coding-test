export interface IConfig {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

const BaseConfig: IConfig = {
  SUPABASE_URL: "https://sawgclcgstpwisdnhvgg.supabase.co",
  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhd2djbGNnc3Rwd2lzZG5odmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMzQyNjMsImV4cCI6MjAxMDYxMDI2M30.pepxEsu00_JTzKxfnfVx9D6VN2dWUJCCSosvKYTSAfc",
};

export default BaseConfig;
