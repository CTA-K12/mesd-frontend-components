import React from 'react';
import {
  CCard,
  CCardBody
} from '@coreui/react';
import { gql } from '@apollo/client';

import { ApolloGrid, ActionsCell } from '../../index';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';

export default {
  component: ApolloGrid,
  title: 'ApolloGrid',
  argTypes: {
    onView: { action: 'onView' },
    onEdit: { action: 'onEdit' },
  } 
}

const GET_DOGS = gql`
  query GetDogs($search: String, $offset: Int, $limit: Int, $sortAttribute: String, $sortDirection: String) {
    dog(search: $search, offset: $offset, limit: $limit, sortAttribute: $sortAttribute, sortDirection: $sortDirection) {
      edges {
        node {
          id
          name
          age
        }
      }
      pageInfo {
        total
      }
    }
  }
`;

const Template = args => {
  const FormattedActionsCell = ActionsCell([
    { icon: faEye, action: (id) => args.onView(id)},
    { icon: faEdit, action: (id) => args.onEdit(id)},
  ]);

  return (
    <CCard>
      <CCardBody>
        <ApolloGrid query={GET_DOGS} resultsPerPage={5}>
          <ApolloGrid.Column name="id" label="" sortable={false} component={FormattedActionsCell} />
          <ApolloGrid.Column name="name" label="Name" sortable={true} />
          <ApolloGrid.Column name="age" label="Age" sortable={true} />
        </ApolloGrid>
      </CCardBody>
    </CCard>
  );
}

export const Default = Template.bind({});
Default.args = {

}
Default.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 0,
            limit: 5,
            sortAttribute: null,
            sortDirection: null,
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 1, name: 'Barkerson', age: 2 }},
                { node: { id: 2, name: 'Woofminister', age: 5 }},
                { node: { id: 3, name: 'Chewson', age: 7 }},
                { node: { id: 4, name: 'Waggins', age: 1 }},
                { node: { id: 5, name: 'Barkley', age: 8 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 5,
            limit: 5,
            sortAttribute: null,
            sortDirection: null,
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 6, name: 'Doggie', age: 3 }},
                { node: { id: 7, name: 'Digsalot', age: 12 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 0,
            limit: 5,
            sortAttribute: 'name',
            sortDirection: 'ASC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 1, name: 'Barkerson', age: 2 }},
                { node: { id: 5, name: 'Barkley', age: 8 }},
                { node: { id: 3, name: 'Chewson', age: 7 }},
                { node: { id: 7, name: 'Digsalot', age: 12 }},
                { node: { id: 6, name: 'Doggie', age: 3 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 5,
            limit: 5,
            sortAttribute: 'name',
            sortDirection: 'ASC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 4, name: 'Waggins', age: 1 }},
                { node: { id: 2, name: 'Woofminister', age: 5 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 0,
            limit: 5,
            sortAttribute: 'name',
            sortDirection: 'DESC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 2, name: 'Woofminister', age: 5 }},
                { node: { id: 4, name: 'Waggins', age: 1 }},
                { node: { id: 6, name: 'Doggie', age: 3 }},
                { node: { id: 7, name: 'Digsalot', age: 12 }},
                { node: { id: 3, name: 'Chewson', age: 7 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 5,
            limit: 5,
            sortAttribute: 'name',
            sortDirection: 'DESC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                
                { node: { id: 5, name: 'Barkley', age: 8 }},
                { node: { id: 1, name: 'Barkerson', age: 2 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      ,
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 0,
            limit: 5,
            sortAttribute: 'age',
            sortDirection: 'ASC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 4, name: 'Waggins', age: 1 }},
                { node: { id: 1, name: 'Barkerson', age: 2 }},
                { node: { id: 6, name: 'Doggie', age: 3 }},
                { node: { id: 2, name: 'Woofminister', age: 5 }},
                { node: { id: 3, name: 'Chewson', age: 7 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 5,
            limit: 5,
            sortAttribute: 'age',
            sortDirection: 'ASC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 5, name: 'Barkley', age: 8 }},
                { node: { id: 7, name: 'Digsalot', age: 12 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 0,
            limit: 5,
            sortAttribute: 'age',
            sortDirection: 'DESC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 7, name: 'Digsalot', age: 12 }},
                { node: { id: 5, name: 'Barkley', age: 8 }},
                { node: { id: 3, name: 'Chewson', age: 7 }},
                { node: { id: 2, name: 'Woofminister', age: 5 }},
                { node: { id: 6, name: 'Doggie', age: 3 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      },
      {
        request: {
          query: GET_DOGS,
          variables: {
            search: null,
            offset: 5,
            limit: 5,
            sortAttribute: 'age',
            sortDirection: 'DESC',
          },
        },
        result: {
          data: {
            dog: {
              edges: [
                { node: { id: 1, name: 'Barkerson', age: 2 }},
                { node: { id: 4, name: 'Waggins', age: 1 }},
              ],
              pageInfo: {
                total: 7
              }
            }
          }
        }
      }
    ]
  }
}