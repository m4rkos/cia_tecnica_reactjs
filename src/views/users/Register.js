import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CCardHeader,
    CCardBody,
    CRow,
    CCol,
    CCard,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CFormText,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CButton,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import PhoneInput from 'react-phone-number-input'
import '../users/maskPhone.css'

const UserRegister = () => {

    const [statusName, setStatusName] = useState(null)
    const [profile, setProfile] = useState(null)
    const [company, setCompany] = useState(1)
    const [phone, setPhone] = useState(null)
    const [mobile, setMobile] = useState(null)
    return (
    <CRow>
        <CCol xl={12}>
            <CCard>
                <CCardHeader>
                    User Create
                </CCardHeader>
                <CCardBody>
                    <CTabs activeTab="userRegistry">
                        <CNav variant="tabs">
                            <CNavItem>
                            <CNavLink data-tab="userRegistry">
                                Register
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink data-tab="profile">
                                Profile
                            </CNavLink>
                            </CNavItem>                            
                        </CNav>
                        <CTabContent>
                        <CTabPane data-tab="userRegistry">
                            <div className="paddContainer">

                                <CRow>
                                    <CCol sm="12">
                                        <CForm action="" method="post">
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-usermail">Username *</CLabel>
                                                    </CCol>
                                                    <CCol sm="4">
                                                        <CInput
                                                            type="text"
                                                            id="nf-usermail"
                                                            name="nf-usermail"
                                                            placeholder="Enter Username.."        
                                                            required                                
                                                        />
                                                        <CFormText className="help-block">Please enter your username</CFormText>
                                                    </CCol>
                                                </CRow>
                                                
                                                
                                            </CFormGroup>
                                            <CFormGroup>                                    
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-fullname">Full name *</CLabel>
                                                    </CCol>    
                                                    <CCol sm="4">
                                                        <CInput
                                                            type="text"
                                                            id="nf-firstname"
                                                            name="nf-firstname"
                                                            placeholder="First Name"                                        
                                                            required
                                                        />
                                                    </CCol>    
                                                    <CCol sm="6">
                                                        <CInput
                                                            type="text"
                                                            id="nf-lastname"
                                                            name="nf-lastname"
                                                            placeholder="Last Name"     
                                                            required                                   
                                                        />                                    
                                                    </CCol>    
                                                </CRow>                                                                       
                                                
                                            </CFormGroup>
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-email">Email *</CLabel>    
                                                    </CCol>
                                                    <CCol sm="10">
                                                        <CInput
                                                            type="email"
                                                            id="nf-email"
                                                            name="nf-email"
                                                            placeholder="Enter Email.."
                                                            autoComplete="email"
                                                        />
                                                        <CFormText className="help-block">Please enter your email</CFormText>    
                                                    </CCol>
                                                </CRow>
                                                                                    
                                            </CFormGroup>
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-phone">Phone Number</CLabel>
                                                    </CCol>    
                                                    <CCol sm="4">                                                        
                                                        <PhoneInput
                                                            className="inputPhone"
                                                            placeholder="(000) 000-0000"
                                                            value={phone}
                                                            onChange={setPhone}
                                                            type="tel"
                                                            id="nf-phone"
                                                            name="nf-phone"
                                                            defaultCountry="US"
                                                        />
                                                    </CCol> 
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-fullname">Mobile Phone *</CLabel>
                                                    </CCol>    
                                                    <CCol sm="4">
                                                        <PhoneInput
                                                            className="inputPhone"
                                                            placeholder="(000) 000-0000"
                                                            value={mobile}
                                                            onChange={setMobile}
                                                            type="tel"
                                                            id="nf-mobilephone"
                                                            name="nf-mobilephone"
                                                            defaultCountry="US"
                                                        />                                                        
                                                    </CCol> 
                                                </CRow>
                                            </CFormGroup>
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-password">Password</CLabel>
                                                    </CCol>
                                                    <CCol sm="8">
                                                        <CInput
                                                            type="password"
                                                            id="nf-password"
                                                            name="nf-password"
                                                            placeholder="Enter Password.."
                                                        />                                            
                                                    </CCol>
                                                </CRow>
                                                                                    
                                            </CFormGroup>
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-re-password">Confirm Password</CLabel>
                                                    </CCol>
                                                    <CCol sm="8">
                                                        <CInput
                                                            type="password"
                                                            id="nf-re-password"
                                                            name="nf-re-password"
                                                            placeholder="Type your Password again"
                                                            
                                                        />
                                                        <CFormText className="help-block">Please enter your password</CFormText>
                                                    </CCol>
                                                </CRow>
                                                                                    
                                            </CFormGroup>
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm={2} className="labelTitle">
                                                        <CLabel htmlFor="nf-expire">Expire</CLabel>
                                                    </CCol>    
                                                    <CCol sm={4}> 
                                                        <CRow>
                                                        <CCol sm={3} >
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="yes" defaultChecked />
                                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        </CCol>
                                                        <CCol sm={2}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="never" />
                                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                                Never
                                                            </label>
                                                        </div>
                                                        </CCol>
                                                        </CRow>
                                                    </CCol> 
                                                    <CCol sm={2} className="labelTitle">
                                                        <CLabel htmlFor="nf-fullname">Expire Date</CLabel>
                                                    </CCol>    
                                                    <CCol sm={3}>
                                                        <CInput
                                                            type="date"
                                                            id="nf-expiredate"
                                                            name="nf-expiredate"                                                
                                                        />
                                                    </CCol> 
                                                    <CCol sm="1">
                                                        <CIcon name="cil-calendar" size="2xl"/>
                                                    </CCol> 
                                                </CRow>
                                            </CFormGroup>
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-re-password">Confirm Password</CLabel>
                                                    </CCol>
                                                    <CCol sm="8">
                                                        <CDropdown className="mt-2 statusTable" >                                                        
                                                            <CDropdownToggle caret className="statusDrop">
                                                            {statusName!=null ? statusName : 'Choice some one'}
                                                            </CDropdownToggle>
                                                            <CDropdownMenu >                
                                                            <CDropdownItem onClick={()=>setStatusName('Active')} 
                                                            >Active</CDropdownItem>                
                                                            <CDropdownItem onClick={()=>setStatusName('Inactive')}
                                                            >Inactive</CDropdownItem>
                                                            </CDropdownMenu>
                                                        </CDropdown>
                                                    </CCol>
                                                </CRow>                                                                                    
                                            </CFormGroup>
                                        </CForm>
                                        </CCol>
                                    </CRow>
                                    <div className="text-right">
                                        <CButton className="btn btn-outline-danger">Cancel</CButton>
                                        <CButton color="primary" className="pd-left" type="submit">Save</CButton>
                                    </div>
                                </div>
                            </CTabPane>
                            <CTabPane data-tab="profile">
                            <div className="paddContainer">

                                <CRow>
                                    <CCol sm="12">
                                        <CForm action="" method="post">
                                            <CFormGroup>
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-usermail">Username *</CLabel>
                                                    </CCol>
                                                    <CCol sm="4">
                                                        <CInput
                                                            type="text"
                                                            id="nf-usermail"
                                                            name="nf-usermail"
                                                            placeholder="Enter Username.."                                        
                                                        />
                                                        <CFormText className="help-block">Please enter your username</CFormText>
                                                    </CCol>
                                                </CRow>
                                                
                                                
                                            </CFormGroup>
                                            <CFormGroup>                                    
                                                <CRow>
                                                    <CCol sm="2" className="labelTitle">
                                                        <CLabel htmlFor="nf-fullname">Full name *</CLabel>
                                                    </CCol>    
                                                    <CCol sm="4">
                                                        <CInput
                                                            type="text"
                                                            id="nf-firstname"
                                                            name="nf-firstname"
                                                            placeholder="First Name"                                        
                                                        />
                                                    </CCol>    
                                                    <CCol sm="6">
                                                        <CInput
                                                            type="text"
                                                            id="nf-lastname"
                                                            name="nf-lastname"
                                                            placeholder="Last Name"                                        
                                                        />                                    
                                                    </CCol>    
                                                </CRow>                                                                       
                                                
                                            </CFormGroup>
                                            
                                                                                        
                                            <CFormGroup>
                                            <CRow>
                                                <CCol md={2} className="labelTitle">
                                                    <CLabel htmlFor="nf-re-password">Profile</CLabel>
                                                </CCol>
                                                <CCol md={3}>
                                                    <CDropdown className="mt-2 statusTable" >                                                        
                                                        <CDropdownToggle caret className="statusDrop">
                                                        {profile!=null ? profile : 'Choice some one'}
                                                        </CDropdownToggle>
                                                        <CDropdownMenu >                
                                                        <CDropdownItem onClick={()=>setProfile('Driver')} 
                                                        >Driver</CDropdownItem>                
                                                        <CDropdownItem onClick={()=>setProfile('Office')}
                                                        >Office</CDropdownItem>
                                                        </CDropdownMenu>
                                                    </CDropdown>
                                                </CCol>
                                            
                                                <CCol md={2} className="labelTitle">
                                                    <CLabel htmlFor="nf-re-password">Company</CLabel>
                                                </CCol>
                                                <CCol md={3}>
                                                    <CDropdown className="mt-2 statusTable" >                                                                                                                
                                                        <CDropdownToggle caret className="statusDrop">
                                                        Company {company}
                                                            </CDropdownToggle>
                                                            <CDropdownMenu >                
                                                            <CDropdownItem onClick={()=>setCompany('1')} 
                                                            >Company 1</CDropdownItem>                
                                                            <CDropdownItem onClick={()=>setCompany('2')}
                                                            >Company 2</CDropdownItem>
                                                            <CDropdownItem onClick={()=>setCompany('3')}
                                                            >Company 3</CDropdownItem>                                                            
                                                            </CDropdownMenu>
                                                    </CDropdown>
                                                </CCol>
                                            </CRow>                                                                                    
                                            </CFormGroup>
                                        </CForm>
                                        </CCol>
                                        
                                        
                                    </CRow>                                    
                                    <div className="text-right">
                                        <CButton className="btn btn-outline-danger">Cancel</CButton>
                                        <CButton color="primary" className="pd-left">Save</CButton>
                                    </div>
                                </div>
                            </CTabPane>                            
                        </CTabContent>
                    </CTabs>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    )
}

export default UserRegister