/*
  Author: llienard
  Date: 2023-04-19

  Copyright (c) 2022 SmartD Technologies, Inc.
  All Rights Reserved.

  This software source code and documentation constitute unpublished work which contains
  trade secrets and proprietary confidential information belonging to SmartD Technologies Inc.
  Access to this material is covered by a previously executed non-disclosure agreement with
  SmartD Technologies Inc. If you have received this material in error and/or are not already
  covered by a non-disclosure agreement, please notify SmartD Technologies Inc. immediately
  (info@smartd.tech) and delete this material. In all cases, none of the foregoing material may
  be copied, duplicated or disclosed without the written permission of SmartD Technologies Inc.

  SmartD Technologies Inc. EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES CONCERNING THIS SOFTWARE
  CODE AND RELATED DOCUMENTATION INCLUDING ANY WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR
  ANY PARTICULAR PURPOSE AND WARRANTIES OF PERFORMANCE. AND ANY WARRANTY THAT MIGHT OTHERWISE
  ARISE FROM COURSE OF DEALING OR USAGE OF TRADE. NO WARRANTY IS EITHER EXPRESS OR IMPLIED WITH
  RESPECT TO THE USE OF THIS SOFTWARE AND DOCUMENTATION. Under no circumstances shall SmartD
  Technologies Inc. be liable for incidental, special, indirect, direct or consequential
  damages or loss of profits, interruption of business, or related expenses which may arise
  from the use of the software and documentation, including but not limited to those resulting
  from defects in software and/or documentation, or loss or inaccuracy of data of any kind.

*/

import {createRealmContext} from '@realm/react';

import Test from '../schemas/test';

export const {
  RealmProvider: TestRealmProvider,
  useObject,
  useQuery,
  useRealm,
} = createRealmContext({
  schema: [Test],
  onFirstOpen: realm => {
    // This is a new realm file, so we will create some default data
    console.log('OnFirstOpen');
    realm.create<Test>('Test', {label: 'Default'});
  },
});
