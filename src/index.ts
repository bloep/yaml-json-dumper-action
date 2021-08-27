import * as Core from '@actions/core';

const payload = Core.getInput('payload', {required: true})
console.debug(payload);
Core.setOutput('payload', payload);