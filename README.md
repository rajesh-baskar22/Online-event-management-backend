 **Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   PAYMENT_GATEWAY_API_KEY=your_payment_api_key
   PAYMENT_GATEWAY_SECRET=your_payment_secret
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:8000` for the frontend and `http://localhost:8000` for the backend.

---

## API Endpoints

### User Endpoints
- `POST /api/users/register` - Register a new user.
- `POST /api/users/login` - Login for existing users.
- `GET /api/events` - Get a list of available events.
- `POST /api/bookings` - Book an event.
- `GET /api/bookings` - View booking history.

### Admin Endpoints
- `POST /api/events` - Add a new event.
- `PUT /api/events/:id` - Update an event.
- `DELETE /api/events/:id` - Delete an event.
- `GET /api/bookings` - View all bookings.
- `PUT /api/bookings/:id` - Approve or cancel a booking.
- `GET /api/reports` - Generate reports.

---
