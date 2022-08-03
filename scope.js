const users = [
    {
      name: 'Quail Drake',
      email: 'aenean.massa.integer@icloud.edu',
      phone: '1-854-511-8971',
      country: 'Peru',
      region: 'Central Region',
      address: '875-9464 A Ave',
      age: 13
    },
    {
      name: 'Vance Jenkins',
      email: 'nisl.sem.consequat@google.ca',
      phone: '1-662-873-6714',
      country: 'Pakistan',
      region: 'Dolnośląskie',
      address: 'Ap #313-450 Aliquam Rd.',
      age: 13
    },
    {
      name: 'Caldwell Perez',
      email: 'sociis.natoque@outlook.org',
      phone: '1-343-445-1982',
      country: 'Canada',
      region: 'Connacht',
      address: 'P.O. Box 957, 7766 Sagittis Rd.',
      age: 18
    },
    {
      name: 'Yetta Pierce',
      email: 'nisl@icloud.edu',
      phone: '(338) 741-0484',
      country: 'United States',
      region: 'Extremadura',
      address: '764-6520 Vestibulum Rd.',
      age: 19
    },
    {
      name: 'Vivien Chang',
      email: 'nonummy.ipsum.non@icloud.edu',
      phone: '1-367-304-4106',
      country: 'Poland',
      region: 'Utrecht',
      address: '222-8561 Odio. Av.',
      age: 21
    },
    {
      name: 'Hakeem Vargas',
      email: 'at.lacus@protonmail.edu',
      phone: '(229) 696-7573',
      country: 'Austria',
      region: 'Bắc Kạn',
      address: '497-9791 Quisque Road'
    },
    {
      name: 'Sean Pittman',
      email: 'donec.tempor.est@yahoo.com',
      phone: '1-806-666-0635',
      country: 'Vietnam',
      region: 'Gaziantep',
      address: 'Ap #970-4618 Ut St.'
    },
    {
      name: 'Keefe Vazquez',
      email: 'laoreet@outlook.net',
      phone: '(834) 162-6777',
      country: 'Colombia',
      region: 'Ulster',
      address: 'Ap #235-8692 Sit Road'
    },
    {
      name: 'Allegra Gay',
      email: 'velit.sed@yahoo.edu',
      phone: '1-377-951-2818',
      country: 'Belgium',
      region: 'Special Capital Region of Jakarta',
      address: '5382 In Rd.'
    },
    {
      name: 'Finn Rowe',
      email: 'quisque.fringilla@google.ca',
      phone: '(256) 184-7877',
      country: 'Spain',
      region: 'Bắc Kạn',
      address: 'Ap #779-7195 Tempus Av.'
    }
  ]
  /* Scope and Closure */
  const calculate = (a, op, b) => {
    const sum = (a, b) => a + b
    const subtract = (a, b) => a - b
    const multiple = (a, b) => a * b
    const divide = (a, b) => a / b
    if (op === '+') {
      const result = sum(a, b)
      return result
    }
    if (op === '-') {
      const result = subtract(a, b)
      return result
    }
    if (op === '*') {
      const result = multiple(a, b)
      return result
    }
    if (op === '/') {
      const result = divide(a, b)
      return result
    }
  }
  
  let j = 100
  
  // console.log(calculate(1, '*', 2))
  // console.log(calculate(1, '-', 2))
  // console.log(sum(10, 20))
  
  const logging = () => {
    let i = 10
  
    if (i === 10) {
      console.log(j, i)
    }
  
    if (j === 20) {
      j = 5
      let k = 30
      console.log(i, j, k)
    }
  }
  
  logging()
  
  const isOpen = doorId => {
    const calculate = (x, y) => {
      const another = () => {
        const oneMore = () => {}
      }
    }
    calculate()
  }
  
  const doOtherThing = () => {}
  
  const callPolice = () => {}
  
  const performSecurityCheckOnDoors = () => {
    if (isOpen()) {
      callPolice()
    } else {
      doOtherThing()
    }
  }
 