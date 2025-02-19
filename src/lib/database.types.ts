export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          name: string
          email: string
          role: 'admin' | 'business' | 'individual'
        }
      }
      businesses: {
        Row: {
          id: string
          name: string
          description: string
          services: string[]
        }
      }
      content: {
        Row: {
          id: string
          title: string
          body: string
          authorId: string
          status: 'pending' | 'approved' | 'rejected'
        }
      }
    }
  }
}