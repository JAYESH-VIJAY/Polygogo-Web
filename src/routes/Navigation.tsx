import { Route, Routes } from "react-router-dom";

import Login from "@/pages/Auth/Login";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import DashboardPage from "@/pages/DashboardPage";
import AuthLayout from "@/layout/AuthLayout";
import MainLayout from "@/layout/MainLayout";
import ContactsPage from "@/pages/Contacts/ContactsPage";
import CampaignsPage from "@/pages/Campaigns/CampaignsPage";
import SurveyPage from "@/pages/Survey/SurveyPage";
import PaymentsPage from "@/pages/Payments/PaymentsPage";
import ReviewsPage from "@/pages/Reviews/ReviewsPage";
import TemplatePage from "@/pages/Template/TemplatePage";
import LocationPage from "@/pages/Locations/LocationPage";
import AnalyticsPage from "@/pages/Analytics/AnalyticsPage";
import AccountPage from "@/pages/Profile/Account/AccountPage";
import BillingPage from "@/pages/Profile/Billing/BillingPage";
import SmsPhonePage from "@/pages/Profile/Sms/SmsPhonePage";
import EmailPage from "@/pages/Profile/Email/EmailPage";
import CalenderPage from "@/pages/Profile/Calender/CalenderPage";
import ChatWidgetPage from "@/pages/Profile/Widget/ChatWidgetPage";
import ProfileLayoutPage from "@/pages/Profile/ProfileLayoutPage";
import { Register } from "@/pages/Auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import PaymentsActivityPage from "@/pages/Payments/Activity/PaymentsActivityPage";
import PaymentActivityUser from "@/pages/Payments/Activity/PaymentActivityUser";
import PaymentsEstimatePage from "@/pages/Payments/Estimate/PaymentsEstimatePage";
import PaymentEstimateUser from "@/pages/Payments/Estimate/PaymentEstimateUser";
import ContactCreatePage from "@/pages/Contacts/ContactCreatePage";
import ContactUserPage from "@/pages/Contacts/User/ContactUserPage";
import ErrorPage from "@/pages/ErrorPage";
import ContactsListPage from "@/pages/Contacts/List/ContactsListPage";
import ContactListCreatePage from "@/pages/Contacts/List/ContactListCreatePage";
import ContactListDetails from "@/pages/Contacts/List/Details/ContactListDetails";
import AnalyticsReviewsPage from "@/pages/Analytics/Reviews/AnalyticsReviewsPage";
import AnalyticsCampaignsPage from "@/pages/Analytics/Campaigns/AnalyticsCampaignsPage";
import AnalyticsPaymentsPage from "@/pages/Analytics/Payments/AnalyticsPaymentsPage";
import AnalyticsContactsPage from "@/pages/Analytics/Contacts/AnalyticsContactsPage";
import CreateNewForm from "@/pages/Survey/CreateNewForm";
import OmniChannelPage from "@/pages/OmniChannel/OmniChannelPage";
import NotificationPage from "@/pages/NotificationPage";
import TermsPage from "@/pages/Static/TermsPage";
import StaticLayout from "@/layout/StaticLayout";
import UserAgreementPage from "@/pages/Static/UserAgreementPage";
import PrivacyPage from "@/pages/Static/PrivacyPage";
export default function Navigation() {
  return (
    <Routes>
      <Route index path="/linkedin" element={<LinkedInCallback />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Route>

      {/* //Static Pages  */}
      <Route path="/company" element={<StaticLayout />}>
        <Route path="terms" element={<TermsPage />} />
        <Route path="agreement" element={<UserAgreementPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="inbox" element={<OmniChannelPage />} />

          {/* Contacts Page */}
          <Route path="contacts">
            <Route index element={<ContactsPage />} />
            <Route path="create" element={<ContactCreatePage />} />
            <Route path=":userId" element={<ContactUserPage />} />
            <Route path="lists">
              <Route index element={<ContactsListPage />} />
              <Route path="create" element={<ContactListCreatePage />} />
              <Route path=":listId" element={<ContactListDetails />} />
            </Route>
          </Route>

          <Route path="campaigns" element={<CampaignsPage />} />
          <Route path="forms-surveys" element={<SurveyPage />} />
          <Route path="createnewform" element={<CreateNewForm />} />

          {/* Payment Module */}
          <Route path="payments">
            <Route index element={<PaymentsPage />} />
            <Route path="activity" element={<PaymentsActivityPage />} />
            <Route path="estimate" element={<PaymentsEstimatePage />} />
            <Route path="estimate/:userId" element={<PaymentEstimateUser />} />
            <Route path="activity/:userId" element={<PaymentActivityUser />} />
          </Route>

          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="templates" element={<TemplatePage />} />
          <Route path="location" element={<LocationPage />} />

          {/* Analytics Module */}
          <Route path="analytics">
            <Route index element={<AnalyticsPage />} />
            <Route path="contacts" element={<AnalyticsContactsPage />} />
            <Route path="payments" element={<AnalyticsPaymentsPage />} />
            <Route path="campaigns" element={<AnalyticsCampaignsPage />} />
            <Route path="reviews" element={<AnalyticsReviewsPage />} />
          </Route>

          {/* Profile Routes */}
          <Route path="settings" element={<ProfileLayoutPage />}>
            <Route index path="account" element={<AccountPage />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="sms-phone" element={<SmsPhonePage />} />
            <Route path="email" element={<EmailPage />} />
            <Route path="calendar" element={<CalenderPage />} />
            <Route path="chat-widget" element={<ChatWidgetPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
