import supertest from 'supertest';
import {expect} from 'chai';
import { testEmployee } from '../fixtures/testData.js';

// setup
const request = supertest('https://qa-practical.qa.swimlane.io/api/');

// preconditions
let applicationID = 'aaUiorxB5O4lm4Cye';
let userID = 'aMFR3P7HwXbmP3faw';
let token ='eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhTUZSM1A3SHdYYm1QM2ZhdyIsInVuaXF1ZV\
9uYW1lIjoiYW5kcmVpLnNoZXZlbGV2IiwiZ2l2ZW5fbmFtZSI6IkFuZHJlaSBTaGV2ZWxldiIsImVtYWlsIjoiYW5kcmVpQGV4Y\
W1wbGUuY29tIiwibmJmIjoxNjQyNDY0MTEyLCJleHAiOjE2NDI0Nzg1MTIsImlhdCI6MTY0MjQ2NDExMiwiaXNzIjoiU3dpbWxh\
bmUiLCJhdWQiOiJTd2ltbGFuZSJ9.Kq5foD9mYyCuXGWkWp3xlssKl4hcIZ0nzaAnNNq98S5lX7uowacE1Khih6XKU-8nGTsy8v\
d2SRdKCgytXxT1pw';

// payloads
// valid Payload
 const validPayload = {
    "applicationId": applicationID,
    "values": {
      "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],\
      [System.Object, System.Private.CoreLib]], System.Private.CoreLib",
      "adwok": testEmployee.city,
      "alzxa": testEmployee.email,
      "aif8s": testEmployee.id,
      "a75lt": testEmployee.firstName,
      "a8rki": testEmployee.lastName,
      "avf8l": testEmployee.state,
      "au0sv": testEmployee.streetAddress,
      "abjcf": testEmployee.telephone,
      "ah1nd": testEmployee.text,
    },
  };

// invalid Payload
const invalidPayload = {
    "applicationId": applicationID,
    "values": {
      "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],\
      [System.Object, System.Private.CoreLib]], System.Private.CoreLib",
      "adwddok": testEmployee.city,

    },
  };

describe('the \'New Employee Submition\' application',  () => {
    let recordID;

    // POST record to the Application
    describe('POST /app/{appId}/record', () => {
        // valid payload
        it('valid payload', async () => {

            const res = await request
                .post('app/' + applicationID + '/record')
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(validPayload);
            recordID = res.body.id;
            expect(res.status).to.be.eq(200);
        });

        // invalid payload
        it('invalid payload', async () => {

            const res = await request
                .post('app/' + applicationID + '/record')
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(invalidPayload);
            expect(res.status).to.be.eq(400);
        });

    });

    // GET record from the Application
    describe('GET /app/{appId}/record/{id}',  () => {

        it('valid recordID', async () => {

            const res = await request
                .get('app/' + applicationID + '/record/' + recordID)
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token);
            expect(res.status).to.be.eq(200);
            expect(res.body).to.not.be.empty;
            });
        });

        // DELETE record from the Application
        describe('DELETE /app/{appId}/record/{id}',  () => {

            it('valid recordID', async () => {
    
                const res = await request
                    .delete('app/' + applicationID + '/record/' + recordID)
                    .set('Accept', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .then((res) => {
                expect(res.status).to.be.eq(204);
                    });
                });
            });
});
