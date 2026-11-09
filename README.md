# CheckoutHub

1Checkout type shop approval and payment system.

Admin requests a shop, SuperAdmin approves it, Admin pays with Razorpay, then Admin gets login credentials.

## Roles
- SuperAdmin (user_type = 0): CRUD shops, approve or reject shop requests
- Admin (user_type = 1): Request a shop, pay, manage own shop

## Tech Stack
- Frontend: React
- Backend: Node.js, Express.js
- Database: MySQL, Sequelize
- Payment: Razorpay
- Real-time: Socket.io
- Container: Docker
