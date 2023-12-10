import { Client, Account } from "appwrite";
import envs from "../configEnv";

export class AuthService {
  client = new Client();
  account;
  session;

  constructor() {
    this.client
      .setEndpoint(envs.appwriteUrl)
      .setProject(envs.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createSessionGoogle() {
    try {
      await this.account.createOAuth2Session(
        "google",
        "http://localhost:5173/",
        "http://localhost:5173/login"
      );
    } catch (err) {
      console.log("login failed in createSessionGoogle-auth.js, ", err);
      throw Error;
    }

    //
    //   Getting the user info and returning the info
    this.getUserInfo();
    if (this.session) {
      console.log("lggg22, ", this.session);
      return {
        user: this.session,
        loggedIn: true,
      };
    } else {
      return {
        loggedIn: false,
      };
    }
  }

  async getUserInfo() {
    try {
      console.log("acc", this.account);
      this.session = await this.account.get();
      return {
        user: this.session,
        success: true,
      };
    } catch (err) {
      console.log("err in getUserInfo()-auth.js ", err);
      return {
        success: false,
        statusCode: err.response.code,
      };
    }
  }

  async logoutUser() {
    try {
      await this.account.deleteSession("current");
      return {
        loggedOut: true,
      };
    } catch (err) {
      console.log("err in logoutUser()-app.js,", err);
    }
  }
}

const authService = new AuthService();

export default authService;
