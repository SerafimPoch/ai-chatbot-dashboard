import { MainPage } from "@/src/2_pages/Main";

// Структура проекта:

// Widget Header:
// Entity - иконка профиля
// Feature - стрелки переключения экранов
// Feature - знак +
// Feature - колокольчик
// Feature - поиск
// Feature - кнопка вызова виджета профиля

// Widget Profile:
// Entity - Никнейм и хэштег + Shared иконка профиля.
// Entity - иконка и profile
// Entity - иконка и manage chatbots
// Entity - иконка и settings
// Feature - переключение темы.
// Feature - log out

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
