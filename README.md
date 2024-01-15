# AI Chatbot Dashboard

## Overview

The "AI Chatbot Dashboard" is a state-of-the-art web application designed to streamline the management and interaction with AI chatbots. This application combines modern web development practices and technologies to create a robust and user-friendly platform.

<img width="1792" alt="Снимок экрана 2024-01-15 в 13 26 35" src="https://github.com/SerafimPoch/ai-chatbot-dashboard/assets/20750239/daa5afb1-9add-4e5f-b61f-df7aad512b42">

## Key Technologies

- **Next.js**: Utilizes the capabilities of this React framework for server-side rendering, static website generation, and efficient build optimizations.
- **TypeScript**: Enhances code quality and developer experience through static type checking and modern JavaScript features.
- **@emotion**: Empowers the application with dynamic CSS-in-JS styling, allowing for scalable and maintainable component design.
- **Feature-Sliced Design System**: Implements a modular and scalable architecture, organizing the codebase for better maintainability and development efficiency.

## Graph Features

### User Engagement Statistics
- A key metrics section that includes:
  - Active User Count: Indicates the total number of active users, with a percentage change indicator to show trends.
  - New Users: Highlights the number of new users acquired, also with a trend indicator.
  - Cancelled Subscriptions: Shows the count of users who have cancelled their subscriptions, providing a quick health check on user retention.
<img width="884" alt="Снимок экрана 2024-01-15 в 13 39 04" src="https://github.com/SerafimPoch/ai-chatbot-dashboard/assets/20750239/eac66fcd-75bf-4e47-8523-5f507b08b860">

### Earnings Overview
- Provides a financial snapshot comparing two versions of chatbots (GPT-4-based and GPT-3.5-based) across parameters such as:
  - Current Pledge: The current pledged amount from supporters for each chatbot.
  - Lifetime Support: Total support accumulated over the lifetime of each chatbot, with a percentage change to indicate growth or decline.
<img width="1479" alt="Снимок экрана 2024-01-15 в 13 40 19" src="https://github.com/SerafimPoch/ai-chatbot-dashboard/assets/20750239/2fbce604-1dae-4b47-9c97-9a968199079a">

### Membership and Audience Engagement
- Membership Chart: Visualizes membership data over time to track growth and churn rates.
- Audience Pie Chart: Shows the percentage of new versus subscribed users, giving insight into the audience composition and highlighting potential areas to increase the subscriber base.
<img width="600" alt="Снимок экрана 2024-01-15 в 13 40 44" src="https://github.com/SerafimPoch/ai-chatbot-dashboard/assets/20750239/12ea1460-353c-4bb3-be22-04d98a3e7fc0">

## Deployment and Development

- **Docker Compose**: The project is configured with a `docker-compose.yaml` file, simplifying the deployment and development process. This ensures a consistent environment setup for different stages of the development lifecycle.

## Getting Started

To get started with the "AI Chatbot Dashboard," ensure you have Docker installed on your system. Follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the command `docker-compose up --build` to build and start the application.
4. Access the application through your web browser at the specified local address.
