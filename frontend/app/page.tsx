import { MainPage } from "@/pages/Main";

// Структура проекта:

// Widget Header:
// Entity - иконка профиля
// 2. Feature - стрелки переключения экранов
// 3. Feature - знак +
// 4. Feature - колокольчик
// 5. Feature - поиск
// 6. Feature - кнопка вызова виджета профиля

// Widget Profile:
// 1. Entity - Никнейм и хэштег + Shared иконка профиля.
// 2. Entity - иконка и profile
// 3. Entity - иконка и manage chatbots
// 4. Entity - иконка и settings
// 5. Feature - переключение темы.
// 6. Feature - log out

// Widget Dashboard
// Entity - молния лого
// Feature - home,insights,chat bots,schedule, payouts
// Feature - settings
// Feature - свернуть dashboard
// Entity - chat bots list

// Widget Boy with laptop
// Entity - картинка мальчика
// Entity - unlock pro insights надпись
// Feature - view earning
// Entity - statistic

// Widget Membership
// Entity - график (картинка)

// Widget Audiences
// Entity - circle chart
// Entity - процент и статистика ниже
// Feature - переключатель статистики

// Widget Earnings
// Feature - переключатель дат
// Entity - таблица

export default function Home() {
  return (
    <main>
      <MainPage />
    </main>
  );
}
