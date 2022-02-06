import React from 'react'

export default function Alert(prop) {

  const modifyAlertType = (msg) => {
      const lower = msg.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '50px'}}>
    {prop.alert && <div className={`alert alert-${prop.alert.alertType} alert-dismissible fade show`} role="alert">
        <strong>{modifyAlertType(prop.alert.alertType)}</strong>: {prop.alert.message}
    </div>}
    </div>
  )
}
