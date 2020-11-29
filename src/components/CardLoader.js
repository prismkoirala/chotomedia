import React from 'react'
import { Grid, Placeholder, Segment } from 'semantic-ui-react'

const CardLoader = () => (
  <>
        <Grid stackable centered>
            <Grid.Row centered columns={2}>
                <Grid.Column width={5}>
                  <Segment raised>
                    <Placeholder>
                      <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  </Segment>
                </Grid.Column> 
                <Grid.Column width={5}>
                  <Segment raised>
                    <Placeholder>
                      <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  </Segment>
                </Grid.Column>  
                <Grid.Column width={5}>
                  <Segment raised>
                    <Placeholder>
                      <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  </Segment>
                </Grid.Column> 
            </Grid.Row>
        </Grid>
     </>
)

export default CardLoader