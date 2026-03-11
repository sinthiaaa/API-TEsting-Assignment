#  Teacher API Testing Assignment

This project demonstrates **API testing** of a Teacher Management API using **Postman** and **Newman**.  
It includes authentication, CRUD operations, negative test cases, and HTML report generation.

---

## 📌 Project Overview

The Teacher API allows management of teachers in a university system.  
This assignment covers:

- Creating, retrieving, updating, and deleting teachers (CRUD)
- Filtering and searching teachers
- Negative testing for invalid inputs or unauthorized access
- Generating HTML reports via Newman

---

## 🧪 Test Cases Covered

### 1️⃣ Authentication
- ✅ **POST** `/login`  
- ✅ Status `200`  
- ✅ Token exists and saved in environment variable  

### 2️⃣ Teachers CRUD
- ✅ **POST** `/api/teacher` (Create)  
- ✅ **GET** `/api/teacher` (Get All + Filters)  
- ✅ **GET** `/api/teacher/{teacherId}` (Get by ID)  
- ✅ **PUT** `/api/teacher/{teacherId}` (Update fields)  
- ✅ **DELETE** `/api/teacher/{teacherId}` (Verify deletion)  

### 3️⃣ Negative Tests
- ❌ Login with wrong credentials → `401`  
- ❌ Access teachers without token → `401`  
- ❌ Get teacher with invalid ID → `404`  
- ❌ Create teacher with missing required field → `400`  

All tests include **status validation** and **response message checks**.  

---

## 🌐 Environment Variables
| Variable    | Description                        |
|------------|------------------------------------|
| `base_url` | Base URL of API server              |
| `token`    | Auth token generated on login       |
| `teacherId`| Dynamically saved Teacher ID        |

---


---

## 🖥️ How to Run

1. **Install dependencies** (if needed):
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npx newman run .\collection\collection.json -e .\collection\environment.json
npm install newman newman-reporter-htmlextra --legacy-peer-deps

```

## 📌 Project Links

- 📮 **Postman Collection:** [View in Postman](https://api.postman.com/collections/52004891-2a8e901b-03b7-4447-b3b6-4443243d1be5?access_key=PMAT-01KKCGWWQBJ1WPYRRG11RANPHM)
- 📁 **Drive Folder (Screenshots + Report + Video):** [Open Drive](https://drive.google.com/drive/folders/1D5U1wMR6SlrKE6RyETrwLv2iPxQTUkzO?usp=drive_link)





## 📌 Document 

- 📮 **Postman Collection:** [View complete documentation in Postman](https://documenter.getpostman.com/view/52004891/2sBXierYyN)


## Newman Reposrt

---
<img width="1918" height="2307" alt="Terminal Report" src="https://github.com/user-attachments/assets/bd5cdf53-79eb-45f0-a540-7baff469c503" />


---
<img width="844" height="859" alt="image" src="https://github.com/user-attachments/assets/e77b45eb-9ccc-493e-9bc9-716c183f332c" />

---







