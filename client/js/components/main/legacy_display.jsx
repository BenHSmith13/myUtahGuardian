"use strict";

import React         from 'react';
import BaseComponent from  "../base_component";
import history       from "../../history";
import Data          from "./processed_data";

export default class LegacyDisplay extends BaseComponent{

  constructor(){
    super();
    this.state = this.getState();
  }

  getState(){
    return{
      data: JSON.parse(Data)
    }
  }

  stuff(){
    return{
      182:	'Automobile - Payment',
      183:	'Bank Service Charges',
      186:	'Charitable Donation',
      187:	'Clothing',
      189:	'Entertainment',
      193:	'Fees - Guardian/Conservator',
      194:	'Fees - Other Fees',
      196:	'Food - Dining Out',
      197:	'Food - Groceries',
      199:	'Gifts Given',
      200:	'Hobby',
      202:	'Household - Maintenance/Repairs',
      203:	'Household - Other Household',
      212:	'Medical: Equipment',
      213:	'Miscellaneous Expense',
      214:	'Personal Needs',
      216:	'Personal Property - Purchase',
      221:	'Services - Personal Care',
      229:	'Transportation',
      230:	'Travel',
      233:	'Utilities - Telephone/Internet/Cable',
      236:	'Fees - Late',
      239:	'Rent'
    }
  }

  getStyles(){
    return {
      thing: {
        position: 'relative',
        width: '70%',
        backgroundColor: "#C0C0C0",
        height: '50px',
        margin: '5px'
      },
      dot: {
        position: 'relative',
        top: '-4px',
        left: '-5px',
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        backgroundColor: 'indianred',
        textAlign: 'center',
        lineHeight: '25px',
        boxShadow: '0 1px 1px 0 maroon'
      },
      id:{
        position: 'relative',
        top: '-10px',
        left: '7px',
        display: 'inline',
        fontSize: '1.5em'
      },
      types: {
        display: 'inline',
        position: 'absolute',
        top: '5px',
        left: '70px'
      }
    }
  }

  data(){
    var styles = this.getStyles();
    var idTransactions = {}
    _.each(this.state.data, (d, key)=>{
      if(idTransactions[d.CaseFileReportId]){
        idTransactions[d.CaseFileReportId].push(d);
      } else {
        idTransactions[d.CaseFileReportId] = [d];
      }
    });
    var idTypes={};
    _.each(this.state.data, (d, key)=>{
      if(idTypes[d.CaseFileReportId]){
        idTypes[d.CaseFileReportId].push(d.TransactionCategoryId);
      } else {
        idTypes[d.CaseFileReportId] = [d.TransactionCategoryId];
      }
    });
    var processedData= {};
    _.each(idTransactions, (transList, key)=>{
      var totalPoints = 0;
      _.each(transList, (trans)=>{
        totalPoints += trans.flag;
      });
      processedData[key] = {totalPoints, transactionCategoryIds: idTypes[key], key};
    });
    processedData = _.sortBy(processedData, "totalPoints").reverse();
    return _.map(processedData, (data)=>{
      //debugger;
      var types = _.uniq(data.transactionCategoryIds);
      var types = _.map(types, (id)=>{return <span>{this.stuff()[id] + '    '}</span>});
      return <div style={styles.thing}>
        <div style={styles.dot}>{data.totalPoints}</div>
        <div style={styles.id}>
          {data.key}
        </div>
        <div style={styles.types}>
          {types}
        </div>
      </div>
    });
  }

  render(){
    var styles = this.getStyles();

    return(
      <div style={{marginTop: '10px'}} >
        {this.data()}
      </div>
    );
  }
};