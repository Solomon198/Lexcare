import React from 'react';

import toast from 'toasted-notes'

import 'toasted-notes/src/styles.css';


export function showToast(message:string){

  toast.notify(

    <div
      style={{
        marginTop:50,
        overflow: "hidden",
        alignItems: "center",
        display: "flex",
        backgroundColor:'white'
      }}
    >
      <div className="text-dark text-left align-items-top px-2">

        <p>
          {message}.
        </p>
      </div>
    </div>

      ,{

        duration:3000,

      })


}
