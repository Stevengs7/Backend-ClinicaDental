#########################################
##########################  ESTO SE EJECUTA UNA SOLA VEZ    ############################

# crear la base de datos
sequelize db:create

# Crear el modelo Student || --name se referie al nombre que queremos dar al modelo (tabla) -- attributes se refiere a las columnas que va a llevar la tabla



#Specialization
sequelize model:generate --name Specialization --attributes 'specialization_name:string'

#Rol
sequelize model:generate --name Role --attributes 'role:string'

#User
sequelize model:generate --name User --attributes 'user_name:string,user_last_name:string,birthday:date, email:string, password:string, phone_number:string, id_role:integer'   

# Patient
sequelize model:generate --name Patient --attributes 'id_user:integer'

# Dentist
sequelize model:generate --name Dentist --attributes 'id_specialization:integer, id_user:integer'

# Appointments
sequelize model:generate --name Appointment --attributes 'id_dentist:integer, id_patient:integer, date:dateonly,
time:date'

# Las tablas intermedias en una relacion N a N no llevan modelo, pero si migración

########################################################################################


# Ejecutar una migracion
sequelize db:migrate #<----- En caso de querer migrar todas las tablas de una base.
sequelize db:migrate --to create-student01.js #<-------- En caso de querer migrar una tabla especifica.


# Revertir migracion
sequelize db:migrate:undo #<---- Revierte la ultima
sequelize db:migrate:undo:all #<---- Revierte todo

# Crear una seed
sequelize seed:generate --name seed-student


# Ejecutar el seed ya creado
sequelize db:seed:all # <---- Para ejecutar todos lo seeds
sequelize db:seed --seed 01-seed-student.js #<------ Para ejecutar un seed en especifico