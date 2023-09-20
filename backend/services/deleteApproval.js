db = require('./db');
helper = require('../helper');

async function deleteApproval(companion_approval_id){
  const result = await db.query(
    `DELETE FROM companion_approvals WHERE companion_approval_id = ${companion_approval_id}`
  );

  let message = 'Error in deleting Approval.'

  if (result.affectedRows) {
    message = 'Approval deleted successfully';
  }
  return { message }
}

module.exports = {
  deleteApproval
};
