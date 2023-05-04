export const contentLocal = {
  pages: {
    dashboard: {
      header: {
        eng: 'Dashboard',
        rus: 'Обзор'
      },
      headerButton: {
        eng: 'Add New',
        rus: 'Добавить Новое'
      }
    },
    deals: {
      header: {
        eng: 'Deals',
        rus: 'Сделки'
      },
      headerButton: {
        eng: 'Add New Deal',
        rus: 'Добавить Новую Сделку'
      },
      tableTitle: {
        eng: 'Total',
        rus: 'Всего сделок'
      },
      tableTitleItems: {
        eng: 'tasks',
        rus: ''
      },
      sortLabel: {
        eng: 'Sort by: Date Created',
        rus: 'Сортировать по: дата создания'
      },
      filterLabel: {
        eng: 'Filter',
        rus: 'Фильтр'
      },
      tableAddress: {
        eng: 'Address',
        rus: 'Адрес объекта'
      },
      tableCity: {
        eng: 'City',
        rus: 'Город'
      },
      tableState: {
        eng: 'State',
        rus: 'Регион'
      },
      tableZip: {
        eng: 'Zip',
        rus: 'Индекс'
      },
      tableDate: {
        eng: 'Appointment Date',
        rus: 'Дата встречи'
      },
      tableArea: {
        eng: 'Area',
        rus: 'Площ.'
      },
      tablePrice: {
        eng: 'Price',
        rus: 'Цена'
      },
      tableStatus: {
        eng: 'Status',
        rus: 'Статус'
      },
      progressStatuses: {
        closed: {
          eng: 'Closed',
          rus: 'Завершено'
        },
        inProgress: {
          eng: 'In progress',
          rus: 'В процессе'
        }
      },
      tableEdit: {
        eng: 'Edit',
        rus: 'Изм.'
      }
    },
    customers: {
      header: {
        eng: 'Customers',
        rus: 'Клиенты'
      },
      headerButton: {
        eng: 'Add New Customer',
        rus: 'Добавить Нового Клиента'
      }
    },
    tasks: {
      header: {
        eng: 'Tasks',
        rus: 'Задания'
      },
      headerButton: {
        eng: 'Add New Tasks',
        rus: 'Добавить Новое Задание'
      }
    },
    calendar: {
      header: {
        eng: 'Calendar',
        rus: 'Календарь'
      },
      headerButton: {
        eng: 'Add New Event',
        rus: 'Добавить Новое Событие'
      }
    },
    notes: {
      header: {
        eng: 'Notes',
        rus: 'Записки'
      },
      headerButton: {
        eng: 'Add New Note',
        rus: 'Добавить Новую Запись'
      }
    },
    settings: {
      header: {
        eng: 'Settings',
        rus: 'Настройки'
      },
      headerButton: {
        eng: '',
        rus: ''
      }
    }
  },
  components: {
    underConstruction: {
      text: {
        eng: 'The page is under construction. You can go to the "Deals" page',
        rus: 'Эта страница находится в разработке. Вы можете перейти на страницу "Сделки"'
      },
      button: {
        eng: 'Go to Deals',
        rus: 'Перейти в Сделки'
      }
    },
    popup: {
      dealsAddEdit: {
        headerTitleAdd: {
          eng: 'Add New Deal',
          rus: 'Добавить новую сделку'
        },
        headerTitleEdit: {
          eng: 'Edit Deal',
          rus: 'Изменить сделку'
        },
        customer: {
          eng: 'Customer',
          rus: 'Клиент'
        },
        changeCustomer: {
          eng: 'Change Customer',
          rus: 'Изменить клиентам'
        },
        roomImage: {
          eng: 'Room Image',
          rus: 'Фотография объекта'
        },
        roomImageButton: {
          eng: 'ADD',
          rus: 'Добавить'
        },
        address: {
          eng: 'Address',
          rus: 'Адрес'
        },
        addressPlaceholder: {
          eng: 'Street Address',
          rus: 'Улица, дом, помещение (напр. ул.Пулковская д.10 кв.10)'
        },
        cityPlaceholder: {
          eng: 'City',
          rus: 'Город'
        },
        statePlaceholder: {
          eng: 'State / Province',
          rus: 'Район / Область'
        },
        zipPlaceholder: {
          eng: 'Zip Code',
          rus: 'Индекс'
        },
        roomArea: {
          eng: 'Room Area (m2)',
          rus: 'Площадь помещения (м2)'
        },
        people: {
          eng: '# of People',
          rus: 'Число людей'
        },
        date: {
          eng: 'Appointment Date',
          rus: 'Дата и время встречи'
        },
        instructions: {
          eng: 'Special Instructions',
          rus: 'Специальные инструкции'
        },
        instructionsPlaceholder: {
          eng: 'Leave a special instructions',
          rus: 'Оставьте специальные инструкции'
        },
        roomAccess: {
          eng: 'Room Access',
          rus: 'Доступ к помещению'
        },
        roomAccessValue: {
          eng: 'Keys with doorman',
          rus: 'Ключ и консьерж'
        },
        price: {
          eng: 'Price ($)',
          rus: 'Цена'
        },
        pricePlaceholder: {
          eng: '5000',
          rus: '5000'
        },
        progress: {
          eng: 'Progress',
          rus: 'Статус'
        },
        progressValues: {
          eng: 'In Progress',
          rus: 'В процессе'
        },
        footerButtonCancel: {
          eng: 'Cancel',
          rus: 'Отменить'
        },
        footerButtonSave: {
          eng: 'Save Deal',
          rus: 'Сохранить'
        }
      }
    }
  }
};

interface localItem {
  eng: string;
  rus: string;
}

export interface dealsAddEditType {
  headerTitleAdd: localItem;
  headerTitleEdit: localItem;
  customer: localItem;
  changeCustomer: localItem;
  roomImage: localItem;
  roomImageButton: localItem;
  address: localItem;
  addressPlaceholder: localItem;
  cityPlaceholder: localItem;
  statePlaceholder: localItem;
  zipPlaceholder: localItem;
  roomArea: localItem;
  people: localItem;
  date: localItem;
  instructions: localItem;
  instructionsPlaceholder: localItem;
  roomAccess: localItem;
  roomAccessValue: localItem;
  price: localItem;
  pricePlaceholder: localItem;
  progress: localItem;
  progressValues: localItem;
  footerButtonCancel: localItem;
  footerButtonSave: localItem;
}
