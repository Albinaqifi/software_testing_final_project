## 🔧 How to Set Up and Run the Project

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd software_testing_final_project
```

2. **Install project dependencies**

```bash
npm install
```

3. **Create a `.env` file in the root directory**

```env
BASE_URL=https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
E2E_USERNAME=Admin
E2E_PASSWORD=admin123
```

4. **Run all Playwright tests**

```bash
npx playwright test
```

5. **View the HTML test report**

```bash
npx playwright show-report
```
