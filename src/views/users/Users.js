import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CButton,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'


import users from '../../data/users.json'
import CIcon from '@coreui/icons-react'

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  const [statusName, setStatusName] = useState(null)
  
  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  // Request GET
  //const [userDataRequest, setUserDataRequest] = useState([])
  // fetch("https://moow.com.br/test-react/users.json", {
  //   "method": "GET",
  //   "headers": {}
  // })
  // .then(response => response.json())
  // .then(result => {
  //   console.log(result);
  //   setUserDataRequest(result)
  // })
  // .catch(err => {
  //   console.error(err);
  // });

  // const usersData = userDataRequest

  // Data local by request json static in folder data
  const usersData = users
  const fields = [
    { key: 'name', _style: { width: '30%' } }, 
    { key: 'username', _style: { width: '20%' } },
    { key: 'profile', _style: { width: '20%'} },
    { key: 'status', _style: { width: '15%'} },
    {
      key: 'show_details',
      label: '',
      _style: { width: '15%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (status)=>{
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'            
        default: return 'primary'
    }
  }

  const goEdit = (id) => { alert(`Go to editing the user: ${usersData[id].name}`) }
  const goDelete = (id) => { alert(`Go to deleting the user: ${usersData[id].name}`) }

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users List
          </CCardHeader>

          <CCardBody>

            <div className="tableBarTop">
              <CButton 
                size="xs"                 
                className="ml-1 btnTextWhite" 
                to="/users/register">
                new user <CIcon 
                  name="cil-user" 
                  height={35}
                /> 
              </CButton>
              
              <CDropdown className="mt-2 statusTable">
              Status: 
                <CDropdownToggle caret className="statusDrop pd-left" color="default">
                  {statusName!=null ? statusName : 'Choice some one'}
                </CDropdownToggle>
                <CDropdownMenu >                
                  <CDropdownItem onClick={()=>setStatusName('Active')} 
                    >
                    Active
                    </CDropdownItem>                
                  <CDropdownItem onClick={()=>setStatusName('Inactive')}
                    >
                    Inactive
                    </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>

            <CDataTable
              items={usersData}
              fields={fields}                             
              footer
              itemsPerPageSelect                
              itemsPerPage={5}
              tableFilter
              sorter
              hover
              striped
              activePage={page}
              clickableRows
              tableFilterValue={statusName}
              dark={1}
              scopedSlots = {{
                  'status':
                  (item)=>(
                      <td>
                      <CBadge color={getBadge(item.status)}>
                          {item.status}
                      </CBadge>
                      </td>
                  ),
                  'show_details':
                  (item, index)=>{
                      return (
                      <td className="py-2">
                        <CButton size="sm" color="info"
                          onClick={()=>goEdit(item.id)}
                          >
                          Edit
                        </CButton>
                        <CButton size="sm" color="danger" className="ml-1"
                          onClick={()=>goDelete(item.id)}
                          >
                          Delete
                        </CButton>                        
                      </td>
                      )
                  }                    
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false} 
              align="end"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users