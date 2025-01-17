/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
/**
 * @type {string}
 */
const repo = require('../_data/site.json').repo;

/**
 * Outputs the github link of a doc based on the inputPath of the file.
 * @param {string} inputPath The document inputFile eleventy property.
 * @return {string}
 */
const githubLink = inputPath => {
  if (!inputPath) {
    console.warn(
      'inputPath passed to githubLink filter was undefined or null.'
    );
  }
  const branch = 'main';
  // fix: duplicate `/` in github url
  return `${repo}/${path.join('blob', branch, inputPath)}`;
};

module.exports = {githubLink};
