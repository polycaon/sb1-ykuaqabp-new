export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      program_types: {
        Row: {
          id: string
          name: string
          description: string
          average_duration: string
          average_fee: string
          icon: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          description: string
          average_duration: string
          average_fee: string
          icon: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          average_duration?: string
          average_fee?: string
          icon?: string
          created_at?: string
          updated_at?: string
        }
      }
      schools: {
        Row: {
          id: string
          name: string
          city: string
          state: string
          country: string
          duration: number
          tuition_fee: number
          program_type: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          city: string
          state: string
          country: string
          duration: number
          tuition_fee: number
          program_type: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          city?: string
          state?: string
          country?: string
          duration?: number
          tuition_fee?: number
          program_type?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}