import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon, ListItem } from '@rneui/themed';
import { EXCURSIONES } from '../comun/excursiones';
import { COMENTARIOS } from '../comun/comentarios';
import { FlatList } from 'react-native-gesture-handler';
import { baseUrl } from '../comun/comun';

const renderComentarioItem = ({ item, index }) => {
    return (
        <ListItem
            key={index}
            bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.comentario}</ListItem.Title>
                <ListItem.Subtitle>{item.valoracion}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.autor}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.dia}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};
function RenderComentario(props) {
    const comentarios = props.comentarios;
    console.log(comentarios)

    return (
        <Card>
            <Card.Title>Comentarios</Card.Title>
            <Card.Divider />
            <FlatList
                data={comentarios}
                renderItem={renderComentarioItem}
                keyExtractor={item => item.id.toString()}
            >
            </FlatList>
        </Card>
    );
}

function RenderExcursion(props) {

    const excursion = props.excursion;

    if (excursion != null) {
        return (
            <Card>
                <Card.Title>{excursion.nombre}</Card.Title>
                <Card.Divider />
                <Card.Image source={{uri: baseUrl + excursion.imagen}}></Card.Image>
                <Text style={{ margin: 20 }}>
                    {excursion.descripcion}
                </Text>
                <Icon
                    raised
                    reverse
                    name={props.favorita ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
                />
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

class DetalleExcursion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excursiones: EXCURSIONES,
            comentarios: COMENTARIOS,
            favoritos: []
        };
    }


    marcarFavorito(excursionId) {
        this.setState({
            favoritos: this.state.favoritos.concat(excursionId
            )
        });
    }

    render() {
        const { excursionId } = this.props.route.params;


        return (
            <ScrollView>
                <RenderExcursion
                    excursion={this.state.excursiones[+excursionId]}
                    favorita={this.state.favoritos.some(el => el === excursionId)}
                    onPress={() => this.marcarFavorito(excursionId)}
                />
                <RenderComentario
                    comentarios={this.state.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
                />
            </ScrollView >
        );
    }
}

export default DetalleExcursion;
