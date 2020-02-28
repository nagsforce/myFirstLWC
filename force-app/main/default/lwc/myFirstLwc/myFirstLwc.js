import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class MyFirstLwc extends LightningElement {
        @track greeting="Nagarajan";

        @wire(getContactList) contacts;

    /*    @track contacts = [
            {
                Id : '001232123',
                Name : 'Naga'
            },
            {
                Id : '001239723',
                Name : 'Raja'
            }
        ] */
}