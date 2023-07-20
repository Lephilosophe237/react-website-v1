export const questions = [
    {
      section: 1,
      items: [
        {
            label: 'First Name',
            type: 'text',
            value: 'First Name'
        },
        {
            label: 'Last Name',
            type: 'text',
            value: 'Last Name'
        }
        ,
        {
            label: 'Email address',
            type: 'email',
            value: 'mail'
        },
        {
            label: 'Number',
            type: 'tel',
            value: 'Number'
        },
        {
            label: 'Drivers ages',
            type: 'number',
            value: 'ages'
          },
          {
            label: 'Height',
            type: 'information',
        },
          {
            label: '-',
            type: 'select',
            value: 'state',
            options: [ '5ft00', '5ft01', '5 ft 2', '5 ft 3', '6ft01']
          },
          {
            label: 'Gender',
            type: 'information',
        },
          {
            label: '-',
            type: 'select',
            value: 'state',
            options: [ 'Male', 'Female']
          }
      ]
    },
    {
      section: 2,
      items: [
        {
            label: 'Services',
            type: 'information',
        },
        {
            label: '-',
            type: 'select',
            value: 'state',
            options: [ 'Short Race (75$)', 'Long Race (90$)', 'GoKar Camp (200$)', 'Mechanical Camp (150$)', 'Karting Leageau License (750$)','Competitive local event racing (150$)']
        },
        {
          label: 'payment methode',
          type: 'credit',
       },
      ]
    },
    {
      section: 3,
      items: [
        {
          label: 'If you are ready to submit please press `Submit`',
          type: 'information'
        }
      ]
    }
  ]