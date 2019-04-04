import React, {Fragment} from 'react';

import './tenant.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


class SearchForm extends React.Component{
  render() {
    return(<Fragment>

      <form justify='center' alignItems="center">

            <h3 className="label">Price (€)</h3>
                <FormControl variant="outlined">
                    <InputLabel

                      htmlFor="outlined-age-native-simple"
                    >

                      </InputLabel>
                      <Select
                        native
                        input={
                          <OutlinedInput

                          />
                        }
                      >
                        <option value="" />
                        <option className="option" value={0-100} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'ce' }}>0-100</option>
                        <option className="option" value={100-250} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>100-250</option>
                        <option className="option" value={251-450} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>251-450  </option>
                        <option className="option" value={451} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>451+  </option>
                      </Select>
                     </FormControl>


                     <h3 className="label">Size (m2)</h3>
                         <FormControl variant="outlined">
                             <InputLabel

                               htmlFor="outlined-age-native-simple"
                             >

                               </InputLabel>
                               <Select
                                 native
                                 input={
                                   <OutlinedInput

                                   />
                                 }
                               >
                                 <option value="" />
                                 <option className="option" value={0-100} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'ce' }}>0-30</option>
                                 <option className="option" value={100-250} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>31 - 70  </option>
                                 <option className="option" value={251-450} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>71 -200   </option>
                                 <option className="option" value={451} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>200+  </option>
                               </Select>
                              </FormControl>





                              <h3 className="label">Locations</h3>
                                  <FormControl variant="outlined">
                                      <InputLabel

                                        htmlFor="outlined-age-native-simple"
                                      >

                                        </InputLabel>
                                        <Select
                                          native
                                          input={
                                            <OutlinedInput

                                            />
                                          }
                                        >
                                          <option value="" />
                                          <option className="option" value={0-100} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'ce' }}>Kamara</option>
                                          <option className="option" value={100-250} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>Neapoli</option>
                                          <option className="option" value={251-450} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>Faliro</option>
                                          <option className="option" value={451} style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center' }}>Kalamaria</option>
                                        </Select>
                                       </FormControl>
      </form>

      </Fragment>
    )
  }

}


export default SearchForm;
