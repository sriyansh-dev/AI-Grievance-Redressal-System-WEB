# AI-Powered Citizen Grievance Redressal System (Web Version)

## Overview

The AI-Powered Citizen Grievance Redressal System (CGRS) is a single-page web application developed for the **IBM Hackathon Prarambh 2025**, organized by IBM, Dr. A.P.J. Abdul Kalam Technical University (AKTU), and the Government of Uttar Pradesh. This system addresses the **AI-Powered Citizen Grievance Redressal System** use case, contributing to the 'AI City in Lucknow' initiative by enabling citizens to submit, track, and resolve grievances efficiently. It leverages AI to automate complaint classification, prioritization, and routing, enhancing public service delivery across urban and rural areas.

The web version is designed for accessibility, supporting multilingual input, real-time tracking, and secure data handling. It is optimized for scalability and ease of deployment, making it suitable for both small-scale pilots and potential nationwide adoption.

## Features

- **Citizen Portal**: A React.js-based interface with a multilingual chatbot for submitting and tracking grievances.
- **AI Backend**:
  - NLP-based classification using BERT for categorizing complaints (e.g., infrastructure, healthcare).
  - Prioritization with rule-based and machine learning models.
  - Fake-report detection using anomaly detection algorithms.
  - Automated routing to relevant government departments.
- **Real-Time Dashboard**: Allows authorities to monitor and manage grievances via WebSockets.
- **Multilingual Support**: Processes complaints in Hindi, Urdu, and other regional languages.
- **Security**: End-to-end encryption and compliance with data protection regulations.
- **Scalability**: Cloud-based architecture for handling high complaint volumes.

## Problem Statement

The CGRS addresses inefficiencies in traditional grievance redressal systems, such as delays, manual errors, and lack of transparency. By integrating AI, it aims to:
- Reduce resolution times from weeks to days or hours.
- Improve accuracy in complaint categorization and routing.
- Enhance accessibility for diverse linguistic groups.
- Foster trust through transparent tracking and audit trails.

For details, see: [AI-Powered Citizen Grievance Redressal System](https://hackathon.allsoftsolutions.in/problem-statement/Mg==).

## Tech Stack

- **Frontend**:
  - [React.js](https://reactjs.org/) (via CDN for simplicity in hackathon context)
  - [Tailwind CSS](https://tailwindcss.com/) for responsive styling
  - [Rasa](https://rasa.com/) for multilingual chatbot integration
- **Backend**:
  - [FastAPI](https://fastapi.tiangolo.io/) for high-performance API
  - [Hugging Face Transformers](https://huggingface.co/) (BERT for NLP)
  - [TensorFlow](https://www.tensorflow.org/) for classification and anomaly detection
- **Database**:
  - [PostgreSQL](https://www.postgresql.org/) for structured data
  - [MongoDB](https://www.mongodb.com/) for unstructured complaint data
- **Cloud**: [AWS](https://aws.amazon.com/) (S3, Lambda, API Gateway) or [GCP](https://cloud.google.com/) for deployment
- **Real-Time**: [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) for dashboard updates
- **Security**: AES-256 encryption, Role-Based Access Control (RBAC)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) 16+ for frontend
- [Python](https://www.python.org/) 3.8+ for backend
- [Docker](https://www.docker.com/) (optional for containerized deployment)
- [PostgreSQL](https://www.postgresql.org/) and [MongoDB](https://www.mongodb.com/) for databases
- [AWS](https://aws.amazon.com/) or [GCP](https://cloud.google.com/) account for cloud deployment
- [IBM SkillBuild](https://skillsbuild.org) account for hackathon compliance

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-team/cgrs-web-prarambh-2025.git
   cd cgrs-web-prarambh-2025
   ```

2. **Install Backend Dependencies**:
   ```bash
   pip install -r backend/requirements.txt
   ```
   Key dependencies:
   - `fastapi`
   - `uvicorn`
   - `transformers`
   - `tensorflow`
   - `psycopg2-binary`
   - `pymongo`

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/cgrs
   MONGODB_URL=mongodb://localhost:27017/cgrs
   AWS_ACCESS_KEY=your_aws_key
   AWS_SECRET_KEY=your_aws_secret
   RASA_API_URL=http://localhost:5005
   API_BASE_URL=http://localhost:8000
   ```

5. **Set Up Databases**:
   - Start PostgreSQL and MongoDB locally or use cloud instances.
   - Run migrations:
     ```bash
     python backend/manage.py migrate
     ```

6. **Start the Backend Server**:
   ```bash
   cd backend
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

7. **Start the Rasa Chatbot**:
   ```bash
   cd rasa
   rasa train
   rasa run --enable-api --cors "*" --port 5005
   ```

8. **Start the Frontend**:
   ```bash
   cd frontend
   npm start
   ```
   The app will be available at `http://localhost:3000`.

9. **Optional: Deploy to Cloud**:
   - Use AWS Elastic Beanstalk or GCP App Engine.
   - Build and deploy with Docker:
     ```bash
     docker-compose up --build
     ```

## Usage

1. **Citizen Interface**:
   - Access the web app at `http://localhost:3000` or the deployed URL.
   - Use the chatbot or form to submit grievances in preferred languages.
   - Track grievance status with a unique ticket ID provided upon submission.

2. **Authority Dashboard**:
   - Access at `http://localhost:3000/admin` (requires RBAC credentials).
   - View real-time metrics, prioritize grievances, and assign tasks to departments.

3. **API Endpoints**:
   - `POST /api/grievances`: Submit a new grievance (e.g., `{"text": "Pothole on Main Street", "language": "en"}`).
   - `GET /api/grievances/{id}`: Retrieve grievance status.
   - `POST /api/classify`: Internal endpoint for AI classification and routing.
   - See `backend/docs/api.md` for full API documentation.

## Project Structure

```
cgrs-web-prarambh-2025/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── models/             # AI/ML models (BERT, anomaly detection)
│   ├── api/                # API routes
│   ├── db/                 # Database connectors
│   ├── manage.py           # Database migrations
│   └── requirements.txt     # Backend dependencies
├── frontend/
│   ├── src/                # React components
│   ├── public/             # Static assets (index.html, favicon)
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js  # Tailwind CSS configuration
├── rasa/
│   ├── data/               # Chatbot training data
│   ├── models/             # Trained Rasa models
│   └── config.yml          # Rasa configuration
├── docker-compose.yml       # Docker configuration
├── .env                    # Environment variables
└── README.md               # Project documentation
```

## AI Models

- **Classification**: [BERT](https://huggingface.co/docs/transformers/model_doc/bert) for categorizing grievances into types (e.g., infrastructure, healthcare).
- **Prioritization**: Random Forest to flag urgent issues based on keywords and metadata.
- **Fake-Report Detection**: Isolation Forest for identifying spam or malicious submissions.
- **NLP**: Multilingual BERT (e.g., `bert-base-multilingual-cased`) for processing complaints in Hindi, Urdu, and other regional languages.

Training data includes synthetic datasets and hackathon-provided samples, with plans to integrate real-world grievance data during pilots.

## Deployment Challenges

- **Scalability**: Ensure cloud infrastructure (AWS/GCP) handles high complaint volumes using auto-scaling groups.
- **Multilingual NLP**: Fine-tune models for low-resource languages like Bhojpuri or Awadhi.
- **Bias Mitigation**: Regularly audit AI outputs to prevent urban bias in prioritization.
- **Security**: Implement AES-256 encryption and GDPR-compliant data handling.
- **Low-Bandwidth Access**: Optimize frontend for 2G/3G networks in rural areas.

## Hackathon Context

This project is developed for the IBM Hackathon Prarambh 2025, aligning with the following requirements:
- **IBM SkillBuild**: All team members must complete the course at [IBM SkillBuild](https://skillsbuild.org/adult-learners/digital-credentials).
- **Submission**: Submit the idea by May 25, 2025, via [Hackathon Portal](https://hackathon.allsoftsolutions.in/register).
- **Timeline**:
  - Webinars: May 15-20, 2025
  - Idea Submission: May 15-25, 2025
  - Final Presentation: June 8-9, 2025
  - Winner Announcement: June 10, 2025
- **IBM Tools**: Integrates Watson Assistant for chatbot functionality and Watson Studio for AI model training (optional).

## Contribution Guidelines

1. Fork the repository and create a feature branch (`git checkout -b feature/your-feature`).
2. Follow coding standards:
   - Python: PEP 8
   - JavaScript: ESLint with Airbnb style guide
3. Write unit tests for new features.
4. Submit pull requests with clear descriptions and test results.
5. Document AI model training parameters in `backend/models/README.md`.

## Testing

- **Backend**:
  - Run unit tests: `pytest backend/tests`
  - Test API endpoints with [Postman](https://www.postman.com/) or `curl`.
- **Frontend**:
  - Run tests: `cd frontend && npm test`
  - Ensure accessibility with [Lighthouse](https://developers.google.com/web/tools/lighthouse).
- **Chatbot**:
  - Validate NLP responses: `cd rasa && rasa test`.

## Future Enhancements

- Add offline support for rural users using Progressive Web App (PWA) features.
- Integrate IoT data for real-time environmental surveillance (e.g., pollution sensors).
- Expand language support for additional Indian dialects.
- Implement predictive analytics for systemic issue detection (e.g., recurring infrastructure failures).

## Contact & Support

For hackathon-related queries:
- Email: [tnp.aktu@aktu.ac.in](mailto:tnp.aktu@aktu.ac.in) or [dean.tp@aktu.ac.in](mailto:dean.tp@aktu.ac.in)
- Hackathon Portal: [Prarambh 2025](https://hackathon.allsoftsolutions.in/home)

For project-specific issues:
- Open a GitHub issue or contact the team lead.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
