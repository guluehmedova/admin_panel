import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, dateFilter, Comparator } from 'react-bootstrap-table2-filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/features/crud/carSlice';
let inStockDateFilter;

const CarList = () => {
  const { cars } = useSelector((state) => ({ ...state.car }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])

  const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: {
      color: 'white'
    }
  }, {
    dataField: 'name',
    text: 'Car Name',
    headerStyle: {
      color: 'white'
    },
    filter: textFilter()
  }, {
    dataField: 'price',
    text: 'Car Price',
    headerStyle: {
      color: 'white'
    }
  }, {
    dataField: 'createdAt',
    text: 'CreatedAt',
    headerStyle: {
      color: 'white'
    },
    formatter: (cell) => {
      let dateObj = cell;
      if (typeof cell !== 'object') {
        dateObj = new Date(cell);
      }
      return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
    },
    editable: false,
    filter: dateFilter({
      getFilter: (filter) => {
        inStockDateFilter = filter;
      }
    })
  }, {
    dataField: 'updatedAt',
    text: 'UpdatedAt',
    headerStyle: {
      color: 'white'
    },
    formatter: (cell) => {
      let dateObj = cell;
      if (typeof cell !== 'object') {
        dateObj = new Date(cell);
      }
      return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
    },
    editable: false,
    filter: dateFilter({
      getFilter: (filter) => {
        inStockDateFilter = filter;
      }
    })
  },
  {
    dataField: 'image',
    text: 'Image',
    headerStyle: {
      color: 'white'
    },
    editorClasses: (cell, row, rowIndex, colIndex) => {
      console.log('updated');
    },
  }];

  function afterSaveCell(oldValue, newValue) {
    console.log('--after save cell--');
    console.log('New Value was apply as');
    console.log(newValue);
    console.log(`and the type is ${typeof newValue}`);
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToEdit: true
  };

  return (
    <div className='container'>
      <BootstrapTable keyField='id' data={cars} columns={columns} selectRow={selectRow}
        filter={filterFactory()}
        cellEdit={cellEditFactory({
          mode: 'dbclick',
          blurToSave: true,
          afterSaveCell
        })} hover condensed
        pagination={paginationFactory()}
      />
    </div>
  )
}

export default CarList