import got from 'got';

import accessEnv from '#root/helpers/accessEnv';

const POSTINGS_SERVICE_URI = accessEnv('POSTINGS_SERVICE_URI');

export default class postingsService {
  static async createPosting({ description, title }) {
    const body = await got
      .post(`${POSTINGS_SERVICE_URI}/postings`, {
        json: { description, title },
      })
      .json();
    return body;
  }

  static async fetchAllPostings() {
    const body = await got.get(`${POSTINGS_SERVICE_URI}/postings`).json();
    return body;
  }
}
