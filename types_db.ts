export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type MapDataType = {
  level: {
    min?: number;
    max?: number;
  };
  map?: number;
  place?: number;
  caption?: string;
  mobs?: number[];
  partyType?: 'all' | 'solo' | 'party';
};

export type UserType = {
  id?: string;
  avatar_url?: string;
  nickname?: string;
  uuid: string;
};

export type Database = {
  public: {
    Tables: {
      likes: {
        Row: {
          id: string;
          post_uuid: string;
          user_uuid: string;
          createdAt: string;
        };
        Insert: {
          id: string;
          post_uuid: string;
          user_uuid: string;
          createdAt: string;
        };
        Update: {
          id: string;
          post_uuid: string;
          user_uuid: string;
          createdAt: string;
        };
      };
      'recommend-list': {
        Row: {
          title: string;
          created_at: string;
          hunt_type: string | null;
          id: number;
          job: string;
          like: number;
          map_data: MapDataType[];
          updated_at: string;
          user: UserType;
          uuid: string;
          writer_uuid: string;
        };
        Insert: {
          title: string;
          created_at?: string;
          hunt_type?: string | null;
          id?: number;
          job: string;
          like?: number;
          map_data: MapDataType[];
          updated_at?: string;
          user: UserType;
          uuid?: string;
          writer_uuid: string;
        };
        Update: {
          title?: string;
          created_at?: string;
          hunt_type?: string | null;
          id?: number;
          job?: string;
          like?: number;
          map_data?: MapDataType[];
          updated_at?: string;
          user?: UserType;
          uuid?: string;
          writer_uuid: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
  ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
  : never;
