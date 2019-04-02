import {Injectable} from '@angular/core';
import {History} from '../models/history';

const historyPromise: any = Promise.resolve([
  {
    patientid: '12',
    wfcontext: 'PumpSuppliesCommercial',
    notes: [
      {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }
    ]
  }, {
    patientid: '12345',
    wfcontext: 'PumpSuppliesCommercial',
    notes: [
      {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }
    ]
  }, {
    patientid: '123',
    wfcontext: 'PumpSuppliesMedicare',
    notes: [
      {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document check',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Recieved Patient Consent',
        createdat: '2017-04-21T10:05',
        writtenby: 'jack.reacher@yahoo.com'
      }, {
        text: 'Follow up post consent for document gathering',
        createdat: '2017-03-21T13:01',
        writtenby: 'jack.reacher@yahoo.com'
      }
    ]
  }
]);

@Injectable()
export class HistoryService {

  // get History for patient for current context/program
  getHistory(patientid: string, wfcontext: string) {
    return historyPromise
      .then(historys => historys.find((history: any) => (history.patientid === patientid && history.wfcontext === wfcontext)));
  }
}
