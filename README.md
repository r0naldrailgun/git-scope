# آزمایش اول — آشنایی با Git

## مشخصات دانشجو

| عنوان | مقدار |
|---|---|
| نام و نام خانوادگی | امیرهمایون شریفی زاده |
| شماره دانشجویی | 401106114 |
| نام پروژه | GitScope |
| درس | آزمایشگاه مهندسی نرم‌افزار |
| آزمایش | آزمایش اول — آشنایی با Git |

---

# لینک‌های پروژه

- **مخزن GitHub:** https://github.com/r0naldrailgun/git-scope
- **نسخه Deploy شده روی GitHub Pages:** https://r0naldrailgun.github.io/git-scope/
- **Kanban Board:** https://github.com/users/r0naldrailgun/projects/1/views/1

---


در این آزمایش پروژه‌ای با نام **GitScope** پیاده‌سازی شد.
GitScope یک ابزار آموزشی تعاملی برای آشنایی بهتر با Git است و هدف آن نمایش عملی تعدادی از مفاهیم مهم Git در قالب یک برنامه Frontend است.

این پروژه با **React، TypeScript و Vite** پیاده‌سازی شده و به صورت خودکار با استفاده از **GitHub Actions** روی **GitHub Pages** Deploy می‌شود.


در این پروژه از فناوری‌ها و ابزارهای زیر استفاده شده است:

| فناوری / ابزار | کاربرد |
|---|---|
| React | پیاده‌سازی رابط کاربری |
| TypeScript | افزایش Type Safety و ساختار بهتر کد |
| Vite | Build Tool و Development Server |
| CSS | طراحی رابط کاربری Responsive |
| Git | Version Control |
| GitHub | Remote Repository |
| GitHub Projects | Kanban Board |
| GitHub Pull Requests | Review و Merge تغییرات |
| GitHub Actions | CI/CD و Deploy خودکار |
| GitHub Pages | میزبانی نسخه نهایی پروژه |
| localStorage | ذخیره Theme و Favorites در مرورگر |

---


ساختار اصلی قسمت Frontend به صورت زیر است:

```text
src/
│
├── components/
│   ├── Header.tsx
│   ├── CommandCard.tsx
│   ├── CommandExplorer.tsx
│   ├── WorkflowVisualizer.tsx
│   ├── CommitChecker.tsx
│   ├── ThemeToggle.tsx
│   │
│   ├── CommandCard.css
│   ├── CommandExplorer.css
│   ├── WorkflowVisualizer.css
│   ├── CommitChecker.css
│   ├── ThemeToggle.css
│   ├── SearchControls.css
│   └── CategoryControls.css
│
├── data/
│   ├── commands.ts
│   └── workflow.ts
│
├── hooks/
│   └── useTheme.ts
│
├── types/
│   ├── git.ts
│   ├── workflow.ts
│   └── commit.ts
│
├── utils/
│   └── commitMessage.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

همچنین Workflow مربوط به Deployment در مسیر زیر قرار دارد:

```text
.github/
└── workflows/
    └── deploy.yml
```

---


برای جلوگیری از توسعه مستقیم روی `main`، پروژه با یک Branch Strategy مشخص توسعه داده شد.

ساختار کلی Branchها به صورت زیر بود:

```text
main
│
└── dev
    │
    ├── feature/base-layout
    ├── feature/command-explorer
    ├── feature/search
    ├── feature/category-filter
    ├── feature/workflow-visualizer
    ├── feature/commit-checker
    ├── feature/theme
    ├── feature/favorites
    └── feature/deployment
```

برای هات فیکس نیز از الگوی زیر استفاده شد.
```text
main
└── hotfix/mobile-header
```

---

در زمینه نقش برنچ های اصلی نیز از برنچ های زیر استفاده شد:
## `main`

این Branch نماینده نسخه Stable و Production پروژه است.

تغییرات عادی به صورت مستقیم روی `main` انجام نشدند و نسخه نهایی از طریق Pull Request وارد `main` شد.

GitHub Pages نیز از نسخه‌ای که به `main` می‌رسد Deploy می‌شود.

---

## `dev`

Branch اصلی توسعه پروژه بود.

Feature Branchها پس از تکمیل ابتدا از طریق Pull Request وارد `dev` می‌شدند.

بعد از پایدار شدن مجموعه تغییرات، یک Pull Request از:

```text
dev → main
```

ایجاد شد.

---

## `feature/*`

برای توسعه هر قابلیت یک Branch مستقل ایجاد شد.

برای مثال:

```text
feature/command-explorer
feature/search
feature/category-filter
feature/workflow-visualizer
feature/commit-checker
feature/theme
feature/favorites
```

این روش باعث شد تغییرات مربوط به Featureهای مختلف از یکدیگر جدا باشند و تاریخچه Git معنی‌دار باقی بماند.

---


اولین Feature Branch مهم پروژه:

```text
feature/base-layout
```

بود.

در این Branch رابط اولیه GitScope ایجاد شد.

چند Commit مهم این مرحله:

```text
feat: create main application layout
feat: add responsive navigation
style: add initial GitScope visual design
```

بعد از تکمیل، تغییرات با Pull Request زیر وارد `dev` شدند:

```text
feature/base-layout → dev
```

---

برای نمایش دستورات Git، Branch زیر ساخته شد:

```text
feature/command-explorer
```

ابتدا Data Model مربوط به دستورات Git تعریف شد.

سپس یک `CommandCard` قابل استفاده مجدد ساخته شد و در نهایت `CommandExplorer` ایجاد شد.

Commitهای مهم این مرحله:

```text
feat: add typed Git command dataset
feat: create reusable command card component
feat: render Git commands in explorer
```


---

برای جست‌وجوی دستورات Branch مستقلی ایجاد شد:

```text
feature/search
```

در این Branch قابلیت Search اضافه شد.
Commit اصلی این Feature:

```text
feat: add command text search
```

بعد از تکمیل، تغییرات از طریق Pull Request وارد `dev` شدند.

---

برای دسته‌بندی دستورات Branch دیگری ایجاد شد:

```text
feature/category-filter
```

Commit اصلی:

```text
feat: add command category filter
```

این Feature به صورت مستقل از Search توسعه داده شد و همین موضوع باعث ایجاد اولین Conflict پروژه شد. شایان ذکر است که این کانفلیکت به توجه به چیزی که در دستور کار امده بود به عمد ایجاد شد.

## Branchهای درگیر

```text
feature/search
feature/category-filter
```
```text
src/components/CommandExplorer.tsx
```

هر دو Branch به صورت مستقل بخش مربوط به کنترل‌ها و Filtering در `CommandExplorer.tsx` را تغییر داده بودند.

ابتدا Branch مربوط به Search وارد `dev` شد.

سپس در Branch:

```text
feature/category-filter
```

دستور زیر اجرا شد:

```bash
git fetch origin
git merge origin/dev
```

Git نتوانست تغییرات دو Branch را به صورت خودکار Merge کند و Conflict ایجاد شد.
Conflict به صورت دستی حل شد.

به جای حذف یکی از قابلیت‌ها، منطق Search و Category Filter با یکدیگر ترکیب شدند.

Commit مربوط به حل Conflict:

```text
fix: resolve search and category filter merge conflict
```

این Conflict نمونه‌ای از حل Conflict با استفاده از **Merge** بود.

---


برای نمایش بهتر Workflow معمول Git Branchها، Feature مستقلی با Branch زیر توسعه داده شد:

```text
feature/workflow-visualizer
```

در ابتدا Data Model مربوط به Workflow طراحی شد و سپس یک SVG برای نمایش Branchها پیاده‌سازی شد.

کاربر می‌تواند روی مراحل مختلف کلیک کند و توضیح مربوط به هر مرحله و دستور Git آن را مشاهده کند.

Commitهای مهم:

```text
feat: add branch workflow data model
feat: render branch workflow visualization
feat: add interactive workflow step descriptions
style: improve workflow visualization
```

---


Branch مربوط به این Feature:

```text
feature/commit-checker
```

بود.

این قسمت یک Commit Message را بررسی می‌کند و بر اساس چند معیار به آن امتیاز می‌دهد.


Commitهای اصلی:

```text
feat: add commit message analysis utility
feat: create interactive commit message checker
feat: add commit checker examples and feedback
```

---

Theme به صورت یک Feature مستقل روی Branch زیر توسعه داده شد:

```text
feature/theme
```

کاربر می‌تواند بین:

```text
dark
light
```

جابجا شود.

```text
gitscope-theme
```

در `localStorage` ذخیره می‌شود.

در نتیجه پس از Refresh صفحه نیز Theme انتخاب‌شده حفظ می‌شود.

Commitهای اصلی:

```text
feat: add dark and light theme toggle
feat: persist selected theme in localStorage
```

---


برای Favorites نیز Branch مستقلی ایجاد شد:

```text
feature/favorites
```

کاربر می‌تواند با استفاده از علامت:

```text
☆
```

یک دستور را Favorite کند.

بعد از Favorite شدن:

```text
★
```

نمایش داده می‌شود.

Favoriteها در `localStorage` ذخیره می‌شوند.

کلید مورد استفاده:

```text
gitscope-favorite-commands
```

همچنین تعداد Favoriteها در Header نمایش داده می‌شود.

Commitهای مهم:

```text
feat: add persistent favorite commands
feat: add favorites indicator to header
```

---

در اینجا نیز به قصد کانفلیکت دوم بین دو برنچ زیر ایجاد شد:

```text
feature/theme
feature/favorites
```

هر دو Branch فایل زیر را تغییر داده بودند:

```text
src/components/Header.tsx
```

Branch Theme مواردی مانند:

```text
ThemeToggle
```

را به Header اضافه کرده بود.

Branch Favorites نیز مواردی مانند:

```text
favoriteCount
```

را به همان Header اضافه کرده بود.

ابتدا:

```text
feature/theme → dev
```

Merge شد.

سپس در Branch Favorites دستورات زیر اجرا شدند:

```bash
git fetch origin
git rebase origin/dev
```

در حین Rebase، Git در فایل:

```text
src/components/Header.tsx
```

Conflict ایجاد کرد.

Conflict به صورت دستی حل شد و هر سه قابلیت Header حفظ شدند:

```text
Navigation
Favorites indicator
Theme toggle
```

پس از حل Conflict:

```bash
git add src/components/Header.tsx
git rebase --continue
```

اجرا شد.

از آنجا که Rebase تاریخچه Branch را بازنویسی می‌کند، Push معمولی قابل استفاده نبود و Branch با دستور زیر Push شد:

```bash
git push --force-with-lease
```

به جای:

```bash
git push --force
```

از `--force-with-lease` استفاده شد، زیرا در صورت وجود تغییر Remote غیرمنتظره، از Overwrite شدن آن جلوگیری می‌کند.

این Conflict نمونه‌ای از Conflict در زمان ریبیس بود.

در نتیجه در پروژه دو روش متفاوت برای Conflict تجربه شد.



لازم به ذکر است که در ابتدای پروژه
برای جلوگیری از ایجاد تغییر مستقیم روی `main`، Branch Protection برای آن فعال شد.

این کار باعث شد Branch تولید نهایی از توسعه روزمره جدا باشد.


برای مشاهده تاریخچه واقعی:

```bash
git log --oneline
```
<img width="1423" height="856" alt="image" src="https://github.com/user-attachments/assets/b88eb715-add9-42fd-9e72-a07506cd8402" />


و برای مشاهده Graph کامل Branchها:

```bash
git log --oneline --graph --decorate --all
```
<img width="1559" height="963" alt="image" src="https://github.com/user-attachments/assets/7ca157f9-a074-4f4d-a091-636b5002c7a0" />
<img width="1540" height="417" alt="image" src="https://github.com/user-attachments/assets/65929cd8-47bd-4b58-aac7-b525b1d866df" />

---






برای Repository با نام `git-scope`، مقدار `base` در Vite به صورت زیر تنظیم شد:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/git-scope/',
})
```

این تنظیم باعث می‌شود مسیر Assetها در GitHub Pages به درستی ساخته شود.

---

# 26. GitHub Pages

Source مربوط به GitHub Pages روی:

```text
GitHub Actions
```

تنظیم شد.

پس از Merge شدن تغییرات به `main`، Workflow اجرا شده و نسخه Production پروژه به صورت خودکار Deploy شد.



# پاسخ پرسش‌های آزمایش

## سوال ۱

پوشه `.git` بخش اصلی یک Git Repository است و اطلاعات مربوط به تاریخچه پروژه، Commitها، Branchها، تنظیمات و وضعیت فعلی Repository را نگه می‌دارد. فایل‌ها و پوشه‌هایی مانند `HEAD`، `objects`، `refs`، `index` و `config` داخل آن قرار دارند. این پوشه معمولاً با اجرای دستور `git init` ساخته می‌شود و حذف آن باعث می‌شود پروژه دیگر به عنوان یک Git Repository شناخته نشود.---
## سوال ۲ 
Atomic بودن یعنی هر Commit یا Pull Request فقط روی یک تغییر مشخص و مرتبط تمرکز داشته باشد. برای مثال `feat: add command search` یک Commit اتمیک است، چون تنها قابلیت جست‌وجو را اضافه می‌کند؛ اما ترکیب جست‌وجو، تغییر Theme و اصلاح README در یک Commit مناسب نیست. این کار باعث می‌شود بررسی تغییرات، پیدا کردن خطا، `revert` و `cherry-pick` ساده‌تر شود.

## سوال ۳ 
`git fetch` تغییرات Remote را دریافت می‌کند ولی آن‌ها را وارد Branch فعلی نمی‌کند؛ `git pull` تغییرات Remote را دریافت کرده و با Branch فعلی ادغام می‌کند؛ `git merge` تاریخچه دو Branch را با حفظ ساختار آن‌ها ترکیب می‌کند؛ `git rebase` Commitهای Branch فعلی را روی یک Base جدید دوباره اعمال می‌کند و در نتیجه Hash آن‌ها تغییر می‌کند؛ و `git cherry-pick` فقط یک Commit مشخص را انتخاب کرده و تغییرات آن را روی Branch فعلی اعمال می‌کند.
## سوال ۴

`git reset` برای جابه‌جایی `HEAD` و در بعضی حالت‌ها تغییر Staging Area یا Working Directory استفاده می‌شود؛ `git revert` بدون حذف History یک Commit جدید ایجاد می‌کند که اثر Commit قبلی را برمی‌گرداند؛ `git restore` برای برگرداندن فایل‌ها یا خارج کردن آن‌ها از Stage استفاده می‌شود؛ `git switch` برای جابه‌جایی بین Branchها یا ساخت Branch جدید است؛ و `git checkout` دستور قدیمی‌تر و چندمنظوره‌ای است که بخشی از کاربردهای `switch` و `restore` را هم پوشش می‌دهد.

## سوال ۵ 

Stage یا Index بخشی بین Working Directory و Repository است که با `git add` مشخص می‌کنیم کدام تغییرات در Commit بعدی قرار بگیرند. در مقابل، `git stash` تغییرات Commit‌نشده را به صورت موقت کنار می‌گذارد تا بتوانیم بدون Commit کردن، Branch را عوض کنیم یا کار دیگری انجام دهیم؛ سپس می‌توان این تغییرات را با دستورهایی مثل `git stash pop` برگرداند.

# سوال ۶ 
اسنپ شات وضعیت پروژه را در قالب گیت ذخیره می کند ولی Commit تنها مجموعه‌ای از خطوط تغییرکرده نیست، بلکه به Snapshot مشخصی از پروژه اشاره دارد. Git با مقایسه Snapshotهای مختلف می‌تواند Difference بین دو Commit را محاسبه کند پس می توان Commit را یک نقطه مشخص از History دانست که وضعیت پروژه در آن ثبت شده است.

---

# سوال ۷
لوکال ریپازیتری روی سیستم شخصی قرار دارد و در کامیت کردن روی سیستم خودمان انجام می دهیم و به اینترنت نیازی نداریم. ریموت ریپازیتوری ها روی یک سرور هستند (در این ازمایش گیت هاب) و برای اپلود در انها به اینترنت نیاز داریم.


# 30. استفاده از هوش مصنوعی

در انجام این ازمایش از chatgpt 5.5 استفاده شد. بخش عمده استفاده از ابزار ای آی برای زدن کد مطابق معماری دیزاین شده بود که بالاخص برای طراحی فایل های CSS از آن استفاده شد. همچنین سرفصل های کانبان و عنوان کامیت ها به همراه توضیحات آن ها نیز برای مرتب تر بودن و جامع بودن توسط مدل پیشنهاد داده شد.  
```

## نمونه پرامپت‌های استفاده‌شده


```text

Give me the css codes for this part and Make it  git-terminal style.

I gave you the commits schema I intend to use. How should I create the Kanban board?

How should I create and resolve the rebase conflict?

There are problems and duplications in this CSS. Correct it.

Refine the name and summary of this pull request based on the changes I have made. Make it comprehensive.
```


مزیت اصلی مدل ها در تسریع فرایند کدزنی بالاخص در بخش های تکراری تر و فرمالیته تر بود و همچنین نظارت ان ها بر داکیومنتیشن مناسب خوانایی کار را افزایش می داد (چه در کامنت گذاری روی کد چه در کامنت گذاری روی مرج و کامیت ها) اما از سوی دیگر مدل ها معایبی نیز دارند برای مثال درک کافی از این که هم اکنون در چه شاخه ای هستیم و ساختار کدبیس ما چگونه است یا به سمت چه معماری ای حرکت می کنیم ندارند و باید روی ان ها نظارت کنیم.


# پایان

**پروژه GitScope — آزمایش اول آشنایی با Git**
