import { LightningElement, track } from 'lwc';
import {myAccounts} from '@salesforce/schema/Account'

export default class MySalesforceDataSource extends LightningElement {

    @track myAccounts;
    
}