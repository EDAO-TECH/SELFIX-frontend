# Database Schema Documentation

## 1. users
Stores user profile information. Synced with Supabase Auth via triggers (recommended).

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | uuid | PK, FK -> auth.users.id | Links to Supabase Auth User |
| `email` | text | Unique, Not Null | User email address |
| `full_name` | text | | User's display name |
| `organisation` | text | | Company/Hospital name |
| `role` | text | Default: 'user' | 'user' or 'admin' |
| `created_at` | timestamp | Default: now() | |
| `updated_at` | timestamp | | |

## 2. certifications
Tracks high-level progress for a specific certification level.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | uuid | PK, Default: uuid_generate_v4() | |
| `user_id` | uuid | FK -> users.id | |
| `level` | text | Not Null | 'level1', 'level2', 'level3' |
| `progress_percentage` | integer | Default: 0 | 0-100 |
| `status` | text | Default: 'not_started' | 'not_started', 'in_progress', 'completed' |
| `started_at` | timestamp | Default: now() | |
| `completed_at` | timestamp | Nullable | |

## 3. modules
Static content defining the curriculum.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | text | PK | e.g., 'l1m1', 'l2m3' |
| `certification_level` | text | Not Null | 'level1', 'level2', 'level3' |
| `module_number` | integer | | Ordering within level |
| `title` | text | Not Null | Module display title |
| `description` | text | | Short summary |
| `content` | text | | Full text/HTML content |
| `order` | integer | | Sort order |

## 4. user_modules
Tracks completion of individual modules.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | uuid | PK, Default: uuid_generate_v4() | |
| `user_id` | uuid | FK -> users.id | |
| `module_id` | text | FK -> modules.id | |
| `completed` | boolean | Default: false | |
| `completed_at` | timestamp | | |

*Constraint: Unique(user_id, module_id)*

## 5. exams
Stores exam attempts and scores.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | uuid | PK | |
| `user_id` | uuid | FK -> users.id | |
| `certification_level` | text | | |
| `score` | integer | | 0-100 |
| `passed` | boolean | | |
| `attempted_at` | timestamp | | |

## 6. certificates
Records issued certificates.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | uuid | PK | |
| `user_id` | uuid | FK -> users.id | |
| `certification_level` | text | | |
| `certificate_url` | text | | URL to stored PDF |
| `issued_at` | timestamp | | |