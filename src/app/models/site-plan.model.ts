/*
 * SPDX-FileCopyrightText: 2021-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SitePlan {
  isometric: boolean;
  layers: {
    'layer-id': string;
  }[];
  origin: string;
}
